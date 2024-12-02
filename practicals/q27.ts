



function checkHeight(my_height: any): void {

    if (isNaN(my_height)) {
        throw new Error('notANumberError');
    }
    
    if (my_height > 72) {
        throw new Error('HugeHeightError');
    }
    
    if (my_height < 5) {
        throw new Error('TinyHeightError');
    }

    console.log(my_height);
}


try {
    checkHeight('seven')
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error('An unexpected error occurred');
    }
}

try {
    checkHeight(77)
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error('An unexpected error occurred');
    }
}

try {
    checkHeight(0)
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error('An unexpected error occurred');
    }
}

try {
    checkHeight(8)
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error('An unexpected error occurred');
    }
}
