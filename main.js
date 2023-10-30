for (let i = 0; i < 100; i++) {

    for (let i = 1, j = 1; j <= 100; i++) {
        if (i % 3 == 0) {
            console.log("FIZZ =" + i);
            j++;

            for (let i = 1, j = 1; j <= 100; i++) {
                if (i % 5 == 0) {
                    console.log("BUZZ =" + i);
                    j++;
                }
            }
        }
    }

}
