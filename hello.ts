interface Runnable {
    run(): void
}

const myTask = new class implements Runnable {
    run(): void {
        console.log('Hello, myTask!')
    }
}

myTask.run()
