 
    let pagination='';
    const totalItem=products.length;
    pages=Math.ceil(totalItem/12);
    for(let i=1;i<pages;i++) {
        pagination += `<li class="page-item"><a class="page-link" onclick="displayItems(${i})">${i}</a></li>`
    }
    document.getElementById('pagination').innerHTML = pagination; 
    let slicedProduct=products.slice(0,12);
    listProducts(slicedProduct);
    function displayItems(pages) {
        let productItem =12;
        let startIndex = productItem * pages;
        let endIndex = (productItem * pages) + productItem; 
        let slicedPaginationProduct = products.slice(startIndex,endIndex);
        document.getElementById('product').innerHTML = '';
        listProducts(slicedPaginationProduct);
    }
    function search() {
         
        let search = document.getElementById('searchInput').value;
        let newProduct = products.filter(p => p.name.startsWith(search));
        document.getElementById('product').innerHTML = '';
        listProducts(newProduct);
    }
    function listProducts(list) {
        list.forEach(product => {document.getElementById('product').innerHTML += `<div class="col-md-3"><div class="card"><img class="card-img-top border-bottom" src="${product.image}" alt="Card image" style="width:100%"><div class="card-body"><h4 class="card-title">${product.name}</h4><p class="card-text" id="product_id_two">no: ${product.id}</p><p class="card-text">Price: $${product.price}</p><p class="card-text">count: ${product.quantity}</p><a href="#" class="btn btn-primary">Add to Cart</a></div></div></div>`
        });
    }
     