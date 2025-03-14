let email = prompt("Enter your Gmail ID to continue...");
        document.body.innerHTML = "";
        document.body.style.color = "white";

        const addItem = async (item) => {
            await randomDelay();
            let div = document.createElement("div");
            div.textContent = item;
            document.body.appendChild(div);
        };

        const randomDelay = () => {
            return new Promise((resolve) => {
                let timeout = 1000 + Math.random() * 3000;
                setTimeout(resolve, timeout);
            });
        };

        async function startHacking() {
            let t = setInterval(() => {
                let last = document.body.lastElementChild;
                if (last && last.textContent.endsWith("...")) {
                    last.textContent = last.textContent.slice(0, -3);
                } else if (last) {
                    last.textContent += ".";
                }
            }, 200);

            let text = [
                "Initializing Hacking",
                "Reading your Files",
                "Password files Detected",
                "Sending all passwords and personal files to server",
                "Cleaning up"
            ];

            for (const item of text) {
                await addItem(item);
            }

            await randomDelay();
            clearInterval(t);
            document.body.innerHTML = "";
        }

        startHacking();