const currentPage = document.body.dataset.page; // "dashboard"
// select all side tabs (index, projects, research, sounds)
const tabs = document.querySelectorAll(".side-tabs a");
// the contents within the bulletin board that I am using
const pagesheet = document.querySelector(".page-sheet");

// function that changes a tab into being the "active-tab", which css can then style
tabs.forEach(tab => {
    if(tab.dataset.page === currentPage) {
        tab.classList.add("active-tab");
    }
    // else remove the active-tab if we changed tabs
    else {
        tab.classList.remove("active-tab");
    }
});

// flipping might be too fast, so we want the flip to finish before changing pages, and this is flipping out before changing pages
tabs.forEach(tab => {
    // when this tab is clicked, run the function which delays changing pages
    tab.addEventListener("click", event => {
        // if the tab that is clicked is already what page we are on, don't flip
        if(tab.classList.contains("active-tab")) {
            event.preventDefault();
            return;
        }
        
        event.preventDefault();
        const destination = tab.href;
        pagesheet.classList.add("slide-out-left");

        setTimeout(() => {
            window.location.href = destination;
        }, 250);
    });
});