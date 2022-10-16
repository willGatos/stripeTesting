import Head from "next/head"
function test() {

    const clover = new Clover('39c7b87101f44739c823362203d21f89');
    const elements = clover.elements();
  return (
    <>
    <Head>
        <script src="https://cdn.polyfill.io/v3/polyfill.min.js"></script>
        <script src="https://checkout.sandbox.dev.clover.com/sdk.js"></script>
    </Head>
    <div>test</div>
    </>
  )
}

export default test