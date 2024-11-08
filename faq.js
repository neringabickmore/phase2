    const faqSearchInput = document.getElementById("faqSearchInput");
    faqSearchInput.addEventListener("keyup", function() {
        const query = faqSearchInput.value.toLowerCase();
        const faqItems = document.querySelectorAll("#FAQaccordion .accordion-item");

        faqItems.forEach(item => {
            const question = item.querySelector(".accordion-header").textContent.toLowerCase();
            const answer = item.querySelector(".accordion-body").textContent.toLowerCase();
            const matches = question.includes(query) || answer.includes(query);

            console.log("Searching for:", query);
                console.log("Question:", question);
                console.log("Answer:", answer);
            item.style.display = matches ? "block" : "none";
        });
    });