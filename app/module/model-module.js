export default class Model{
    pageName = "HOME";

    homeContent = `
    <style>.navBtn{color: white; cursor: pointer;}</style>
        <div id="banner">
            <div class="overlay"></div>
            <div id="bannerAbout">
                <h1>travel-fly</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Fugiat aliquid minus nemo sed est.</p>
            </div>
            <img src="images/hero.png" /></div>
        <div id="contentImages" style="margin-right: auto;
        margin-left: auto;">
            <div>
                <img src="images/content1.png" />
            </div>
            <div>
                <img src="images/content2.png" />
            </div>
            <div>
                <img src="images/content3.png" />
            </div>
        </div>
        <form style="margin-right: auto;
        margin-left: auto;">
            <h1>Booking Form</h1>
            <div class="formRow">
                <input name="name" type="text" placeholder="name..." />
                <input name="email" type="text" placeholder="email..." />
            </div>
            <div class="formRow">
                <input name="country" type="text" placeholder="country..." />
                <input name="hotel" type="text" placeholder="hotel..." />
            </div>
            <div class="formRow dateInput">
                <label  for="checkin">Check-in</label>
                <input name="checkin" type="date" />
            </div>
            <div class="formRow dateInput">
                <label for="checkout">Check-out</label>
                <input name="checkout" type="date" />
            </div>
            <div class="formRow numberInputs">
                <div>
                    <label for="adults">Adult</label>
                    <input class="numberInput" name="adults" type="number" />
                </div>
                <div>
                    <label for="children">Children</label>
                    <input class="numberInput" name="children" type="number" />
                </div>
                <div>
                    <label for="rooms">Rooms</label>
                    <input class="numberInput" name="rooms" type="number" />
                </div>
            </div>
            <div class="formRow">
                <textarea name="message" placeholder="message..."></textarea>
            </div>
            <button class="submitBtn" type="submit">SUBMIT</button>
        </form>
    `;

    aboutContent = `
    <style>.navBtn{color: black; cursor: pointer;}</style>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>ABOUT:<div id="aboutH1Underline"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection2">
            <h1>CLIENT QUOTES:<div id="aboutH2Underline"></div></h1>
            <div class="quote">
                <div class="quoteContent">
                    <div>
                        <img src="images/quote1.png" />
                    </div>
                    <div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <div class="user">
                            <p>Miranda Brown</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quote">
                <div class="quoteContent">
                <div>
                    <img src="images/quote2.png" />
                </div>
                <div>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <div class="user">
                        <p>Johnathan wes</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>`;

    toursContent = `
    <style>.navBtn{color: black; cursor: pointer;}</style>
    <div id="tourMainSection">
        <div id="tourTopImage">
            <div class="overlayContent">
                <h1>TOURS:</h1>
            </div>
            <img src="images/tourBanner.png" />
        </div>
        <div class="localeRow">
            <div>
                <div class="overlayContent">
                    <h1>Israel</h1>
                    <p>from $1000</p>
                    <a name="ISRAEL" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="images/content1.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>U.S.A</h1>
                    <p>from $1500</p>
                    <a name="USA" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="images/content2.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>Australia</h1>
                    <p>from $1800</p>
                    <a name="AUSTRALIA" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="images/content3.png" />
            </div>
        </div>
        <div class="localeRow">
            <div>
                <div class="overlayContent">
                    <h1>New Zealand</h1>
                    <p>from $1200</p>
                    <a name="NEW ZEALAND" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="images/content4.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>France</h1>
                    <p>from $2500</p>
                    <a name="FRANCE" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="images/content5.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>Egypt</h1>
                    <p>from $900</p>
                    <a name="EGYPT" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="images/content6.png" />
            </div>
        </div>
        <div class="localeRow">
            <div>
                <div class="overlayContent">
                    <h1>Japan</h1>
                    <p>from $1300</p>
                    <a name="JAPAN" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="images/content7.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>Canada</h1>
                    <p>from $2000</p>
                    <a name="CANADA" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="images/content8.png" />
            </div>
            <div>
                <div class="overlayContent">
                    <h1>U.A.E</h1>
                    <p>from $3000</p>
                    <a name="UAE" class="learnMoreBtn">Learn More</a>
                </div>
                <img src="images/content9.png" />
            </div>
        </div>
    </div>
    `;


    /**
     * Tours Sub-content
     */

    tours_Aus = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Australia tour package: </h1>
            <p class="startingFrom">STARTING FROM $1800</p>
        </div>
        <img src="images/tours/australia/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="images/tours/australia/content1.png" />
        </div>
        <div>
            <img src="images/tours/australia/content2.png" />
        </div>
        <div>
            <img src="images/tours/australia/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;


    tours_Can = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Canada tour package: </h1>
            <p class="startingFrom">STARTING FROM $2000</p>
        </div>
        <img src="images/tours/canada/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="images/tours/canada/content1.png" />
        </div>
        <div>
            <img src="images/tours/canada/content2.png" />
        </div>
        <div>
            <img src="images/tours/canada/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_Egt = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Egypt tour package: </h1>
            <p class="startingFrom">STARTING FROM $900</p>
        </div>
        <img src="images/tours/egypt/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="images/tours/egypt/content1.png" />
        </div>
        <div>
            <img src="images/tours/egypt/content2.png" />
        </div>
        <div>
            <img src="images/tours/egypt/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_Fre = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">France tour package: </h1>
            <p class="startingFrom">STARTING FROM $2500</p>
        </div>
        <img src="images/tours/france/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="images/tours/france/content1.png" />
        </div>
        <div>
            <img src="images/tours/france/content2.png" />
        </div>
        <div>
            <img src="images/tours/france/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_Isl = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Israel tour package: </h1>
            <p class="startingFrom">STARTING FROM $1000</p>
        </div>
        <img src="images/tours/israel/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="images/tours/israel/content1.png" />
        </div>
        <div>
            <img src="images/tours/israel/content2.png" />
        </div>
        <div>
            <img src="images/tours/israel/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_Jpn = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">Japan tour package: </h1>
            <p class="startingFrom">STARTING FROM $1300</p>
        </div>
        <img src="images/tours/japan/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="images/tours/japan/content1.png" />
        </div>
        <div>
            <img src="images/tours/japan/content2.png" />
        </div>
        <div>
            <img src="images/tours/japan/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_NZ = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">New Zealand tour package: </h1>
            <p class="startingFrom">STARTING FROM $1200</p>
        </div>
        <img src="images/tours/newZealand/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="images/tours/newZealand/content1.png" />
        </div>
        <div>
            <img src="images/tours/newZealand/content2.png" />
        </div>
        <div>
            <img src="images/tours/newZealand/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_UAE = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">U.A.E tour package: </h1>
            <p class="startingFrom">STARTING FROM $3000</p>
        </div>
        <img src="images/tours/uae/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="images/tours/uae/content1.png" />
        </div>
        <div>
            <img src="images/tours/uae/content2.png" />
        </div>
        <div>
            <img src="images/tours/uae/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;

    tours_USA = `<div id="toursMainSection">
    <div id="toursTopImage">
        <div class="overlayContentTours">
            <h1 class="countryTourPackage">U.S.A tour package: </h1>
            <p class="startingFrom">STARTING FROM $1500</p>
        </div>
        <img src="images/tours/usa/banner.png" />
    </div>
    <div class="localeRowTour">
        <div>
            <img src="images/tours/usa/content1.png" />
        </div>
        <div>
            <img src="images/tours/usa/content2.png" />
        </div>
        <div>
            <img src="images/tours/usa/content3.png" />
        </div>
    </div>
    <div id="aboutMainSection">
        <div id="aboutSection1">
            <h1>DAY #1:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #2:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div id="aboutSection1">
            <h1>DAY #3:<div id="aboutH1Underline" style="margin:0;width: 8vw;"></div></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
    <a href="#" style="font-weight: 900;" class="learnMoreBtn">BOOK NOW</a>
</div>`;



    specialOffersContent = `
    <style>.navBtn{color: black; cursor: pointer;}</style>
    <div id="aboutMainSection">
        <div id="aboutSection2">
            <h1>SPECIAL OFFERS(S):<div id="specialOffersTitleUnderline"></div></h1>
            <div class="quote" style="margin:1vw 0;">
                <div class="quoteContent" style="margin:1vw 0;">
                    <div style="margin:1vw 0;">
                        <img src="images/specialsOffersContent1.png" />
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <h1>BARCELONA, SPAIN<div id="specialOffersTitleUnderline"></div></h1> 
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <a class="learnMoreBtn" style="width:fit-content;margin:0;position: absolute;bottom: 0;">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="quote" style="margin:1vw 0;">
                <div class="quoteContent" style="margin:1vw 0;">
                <div style="margin:1vw 0;">
                    <img src="images/specialsOffersContent2.png" />
                </div>
                <div style="display: flex;flex-direction: column;position: relative;">
                    <h1>BANGKOK, THAILAND<div id="specialOffersTitleUnderline"></div></h1> 
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <a class="learnMoreBtn" style="width:fit-content;margin:0;position: absolute;bottom: 0;">Learn More</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    `;


    blogContent = `
    <style>.navBtn{color: black; cursor: pointer;}</style>
    <div id="blogMainSection">
        <div class="blogSection">
            <h1>
                BLOG:
                <div id="blogTitleUnderline"></div>
            </h1>
            <div class="blog" style="margin:1vw 0;">
                <div class="blogContent" style="margin:1vw 0;">
                    <div class="dateSection">
                        <img src="images/dates.jpg" />
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <div style="margin-bottom: 1vw;">
                            <img src="images/blogContent2.png" />
                        </div>
                        <div>
                            <h1>Sed et persipiatis unde omnis iste natus</h1> 
                            <p class="blogText">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="blogContent" style="margin:1vw 0;">
                    <div class="dateSection">
                        <img src="images/dates2.jpg" />
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <div style="margin-bottom: 1vw;">
                            <img src="images/blogContent2.png" />
                        </div>
                        <div>
                            <h1>Sed et persipiatis unde omnis iste natus</h1> 
                            <p class="blogText">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    contactContent = `
    <style>.navBtn{color: black; cursor: pointer;}</style>
    <div id="contactMainSection">
    <div class="contactSection">
        <h1>CONTACT US:<div id="contactTitleUnderline"></div></h1>
        <div class="contact" style="margin:1vw 0;">
            <div class="contactContent" style="margin:1vw 0;">
                <div>
                    <img src="images/contactUs.png"/>
                </div>
                <div style="display: flex;flex-direction: column;">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>
            <div class="contactContent" style="margin:1vw 0;">
                <form>
                    <input name="tourName" type="text" placeholder="Tour name..." />
                    <input name="email" type="text" placeholder="Email Address..." />
                    <input name="company" type="text" placeholder="Company..." />
                    <textarea name="message"placeholder="Message..."></textarea>
                    <button class="submitBtn contactBtn" type="submit">SEND MESSAGE</button>
                    <!-- <h1>Booking Form</h1>
                    <div class="formRow">
                        <input name="name" type="text" placeholder="name..." />
                        <input name="email" type="text" placeholder="email..." />
                    </div>
                    <div class="formRow">
                        <input name="country" type="text" placeholder="country..." />
                        <input name="hotel" type="text" placeholder="hotel..." />
                    </div>
                    <div class="formRow dateInput">
                        <label  for="checkin">Check-in</label>
                        <input name="checkin" type="date" />
                    </div>
                    <div class="formRow dateInput">
                        <label for="checkout">Check-out</label>
                        <input name="checkout" type="date" />
                    </div>
                    <div class="formRow numberInputs">
                        <div>
                            <label for="adults">Adult</label>
                            <input class="numberInput" name="adults" type="number" />
                        </div>
                        <div>
                            <label for="children">Children</label>
                            <input class="numberInput" name="children" type="number" />
                        </div>
                        <div>
                            <label for="rooms">Rooms</label>
                            <input class="numberInput" name="rooms" type="number" />
                        </div>
                    </div>
                    <div class="formRow">
                        <textarea name="message" placeholder="message..."></textarea>
                    </div>
                    <button class="submitBtn" type="submit">SUBMIT</button> -->
                </form>
            </div>
        </div>
    </div>
</div>
<div >

</div>
    `;

    defaultContent = this.homeContent;

    constructor(){}

}

// var MODEL = (function(){

// })();