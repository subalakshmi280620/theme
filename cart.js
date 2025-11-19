let cart = [
            { id: 1, title: "Wordpress Theme", price: 99, qty: 1, img: "images/agency.png" },
            { id: 2, title: "Restaurant Template", price: 12, qty: 1, img: "images/online food.png" },
            { id: 3, title: "Avada - Website Builder", price: 12, qty: 1, img: "images/c768a587-fba9-401a-bbbd-76d475719f4f-cover.png" },
            { id: 4, title: "CreativeStudio - Agency", price: 15, qty: 1, img: "images/65343-big.jpg" },
        ];

        function renderCart() {
            let container = document.getElementById("cartItems");
            container.innerHTML = "";

            if (cart.length === 0) {
                container.innerHTML = `<h3 style="text-align:center;padding:40px;color:gray;">Your Cart is Empty</h3>`;
                updateTotal();
                return;
            }

            cart.forEach(item => {
                container.innerHTML += `
        <div class="cart-item">
            <img src="${item.img}" alt="">
            <div class="item-info">
                <div class="item-title">${item.title}</div>
                <div class="license">License: Regular License</div>
            </div>

            <div class="item-actions">
                <div class="qty-box">
                    <button onclick="changeQty(${item.id}, -1)">−</button>
                    <span class="qty-num">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>

                <div class="price">$${item.price}</div>

                <button class="remove" onclick="removeItem(${item.id})">×</button>
            </div>
        </div>`;
            });

            updateTotal();
        }

        function changeQty(id, change) {
            let item = cart.find(x => x.id === id);
            if (!item) return;

            item.qty += change;

            if (item.qty < 1) {
                removeItem(id);
                return;
            }

            renderCart();
        }

        function removeItem(id) {
            cart = cart.filter(item => item.id !== id);
            renderCart();
        }

        function updateTotal() {
            let total = 0;
            let saving = 0;

            cart.forEach(item => {
                total += item.price * item.qty;

                if (item.price >= 50) {
                    saving += item.price * 0.10;
                }
            });

            document.getElementById("totalPrice").innerText = `US$ ${total.toFixed(2)}`;
            document.getElementById("savingText").innerText = `Total Saving $${saving.toFixed(2)}`;
        }

        document.getElementById("emptyCart").addEventListener("click", () => {
            if (confirm("Are you sure you want to empty the cart?")) {
                cart = [];
                renderCart();
            }
        });

        // Initial render
        renderCart();