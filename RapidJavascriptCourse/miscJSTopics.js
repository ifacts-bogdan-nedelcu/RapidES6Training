

/* Error Handling */

try {
    throw new Error('Custom Error');
    
} catch (error) {
    console.log(error.name + ' - ' + error.message);
} finally {
    console.log('Finally done');
}

try {
    throw new RangeError('Range Error');
} catch (error) {
    if (error instanceof RangeError) {
        console.log(error.name);
    }
}

/* Promises and Observables */



console.log('******************');
