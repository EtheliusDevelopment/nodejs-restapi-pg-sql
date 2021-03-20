import app from './app'

async function main () {
    const PORT = 4000
    await app.listen(PORT)
    console.log(`Serveris running on port http://localhost:${PORT}`);
}


main()