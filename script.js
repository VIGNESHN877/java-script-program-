// factorail


    let n = 10;


    let ans = 0;


    for (let i =1; i <= n; i++) {

        if (i % 2 == 0) {
            continue;

        }
        ans+=i;
    }

    console.log(ans);