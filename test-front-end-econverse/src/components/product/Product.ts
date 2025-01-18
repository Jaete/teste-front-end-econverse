export async function getServerSideProps() {
    const res = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
    const data = await res.json();
  
    console.log(res)

    return {
        props: {
            products: data
        }
    };
}

