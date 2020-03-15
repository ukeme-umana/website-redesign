import React from 'react';
import core1 from '../core1.png';
import core2 from '../core2.png';
import core3 from '../core3.png';

function CoreValues () {
    return (
        <div className="core">
          {/*   <h2>Core Values</h2> */}
            <div className="shift">
                <div className="sh1">
                         <img className="drive" src={core1} alt="drive"/>
                         <div class="shh1">
                             <h3>Aesthetically appealing</h3>
                             <p>
                             Have you always wanted to learn how to make latte art at home? We get that! At ChefSteps, 
                             we're all about perfecting those special touches that take a dish or beverage from good to great
                             </p>
                             <a href="https://www.marthastewart.com/1500743/how-make-latte-art">Learn more</a>

                         </div>
                </div>
                <div className="sh2">
                         <img className="passion" src={core2} alt="passion"/>
                         <div class="shh2">
                             <h3>It tastes great</h3>
                             <p>
                                 Martha Stewart makes really good coffee and she explain how you can do same.
                                 Want to make great coffee?
                             </p>
                             <a href="https://www.marthastewart.com/1500743/how-make-latte-art">Learn more</a>
                         </div>
                </div>
                <div className="sh3">
                         <img className="love" src={core3} alt="heart"/>
                         <div class="shh3">
                             <h3>Should I drink coffee?</h3>
                             <p>
                                Coffee is a brewed drink prepared from roasted coffee beans, 
                                the seeds of berries from certain Coffea species.
                             </p>
                             <a href="https://en.wikipedia.org/wiki/Coffee">Learn more</a>
                         </div>
                </div>
            </div>
        </div>

    );
}

export default CoreValues;