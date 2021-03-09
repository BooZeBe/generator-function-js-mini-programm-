function sequence (start = 0, step = 1, stop = 100, logs = 5) {
    let consoleLogs = logs * 2

    function* numberAddPlus (start, step)  {
        while (true) {
            if (start >= stop) {
              break
            }        
            if (0 < consoleLogs) {
              consoleLogs--
            } else if (consoleLogs === 0) {
              break
            }

            yield start;
            start += step;
        }
    }
    
    const number = numberAddPlus(start, step)

    return function () {
        return number.next().value
    } 
}

const firstGenerator = sequence(
                            Math.floor(Math.random() * 10),
                            Math.floor(Math.random() * 100),
                            1000,
                            10
                        );

while (firstGenerator() !== undefined) {
    console.log(firstGenerator())
}
