const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');
const productAdd = document.querySelectorAll('.product__add');
const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const productImage = document.querySelectorAll('.product__image');

function createElement(img, id, count) {
    const arrProducts = Array.from(cartProducts.querySelectorAll('.cart__product'));
    const arrElement = arrProducts.find(elem => elem.dataset.id === id);
    
    if (arrElement) {
        let sum = arrElement.querySelector('.cart__product-count');
        sum.textContent = Number(sum.textContent) + Number(count);
        
    } else {
        const wrapper = document.createElement('div');
        const image = document.createElement('img');
        const counter = document.createElement('div');

        wrapper.classList.add('cart__product');
        wrapper.dataset.id = id;
        image.classList.add('cart__product-image');
        image.src = img;
        counter.classList.add('cart__product-count');
        counter.textContent = count;

        wrapper.append(image);
        wrapper.append(counter);

        cartProducts.append(wrapper);
    }
}

product.forEach(element => {
    element.addEventListener('click', (event) => {
        const item = event.target;
        const parentElement = item.closest('.product');
        
        if (item.classList.contains('product__quantity-control_inc')) {
            let itemValueNext = item.previousElementSibling;
            itemValueNext.textContent = Number(itemValueNext.textContent) + 1;   
        }

        if (item.classList.contains('product__quantity-control_dec')) {
            let itemValuePrevious = item.nextElementSibling;
            
            if (Number(itemValuePrevious.textContent) === 0) {
                return
            }

            itemValuePrevious.textContent = Number(itemValuePrevious.textContent) - 1;
        }

        if (item.classList.contains('product__add')) {
            const image = parentElement.querySelector('.product__image').src;
            const counter = parentElement.querySelector('.product__quantity-value').textContent.trim();
            const id = parentElement.dataset.id;
            createElement(image, id, counter);
        }
    });
});