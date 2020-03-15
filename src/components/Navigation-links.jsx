import React from 'react';

function NavigationLink() {
    return (
        <div class="topnav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search here" name="search" />
                    <button type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NavigationLink;