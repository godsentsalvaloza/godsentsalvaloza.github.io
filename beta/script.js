// Godsent's personal website made on 03/19/2023 version 0.01
// Last updated: 03/31/2023



//Variables
    //Button manipulation
        const dark = document.getElementById("darkModeSelector");
        const light = document.getElementById("lightModeSelector");
        const lightSelector = document.getElementById("lightModeSelector");

    //Styling variables
        const navBG = document.getElementById("topNavigationalBar");
        const body = document.getElementById("mainBody");
        const headName = document.getElementById("topNavName");
        const othersNavTop = document.getElementById("othersHyperlink");
        const blogsNavTop = document.getElementById("blogsHyperlink");
        const aboutNavTop = document.getElementById("aboutHyperLink");
        const homeNavTop = document.getElementById("homeHyperLink");
        const quoteText = document.getElementById("quoteText");
        const webName = document.getElementById("websiteOwner");
        const credential = document.getElementById("nameCredential");
        const headingOne = document.getElementById("headingFirst");
        const headingTwo = document.getElementById("headingSecond");
        const contentOne = document.getElementById("contentOne");
        const contentTwo = document.getElementById("contentTwo");
        const contentThree = document.getElementById("contentThree");
        const contentFour = document.getElementById("contentFour");
        const footerNav = document.getElementById("bottomNavigationalBar");
        const footerMain = document.getElementById("footerPage");
        const bottomHome = document.getElementById("homeNavBottom");
        const bottomAbout = document.getElementById("aboutNavBottom");
        const bottomBlogs = document.getElementById("blogsNavBottom");
        const bottomOthers = document.getElementById("othersNavBottom");
        const bottomBack = document.getElementById("backNavBottom");        
//Theme function

    //Activate dark
    dark.onclick = function darkMode () {
        
        light.style.display = "inline"
        dark.style.display = "none"

        //Styling
            //Body
                body.style.backgroundColor = "#000000"


            //Nav
                navBG.style.backgroundColor = "#1a1a1a"
                headName.style.color = "#e6e6e6"
                light.style.backgroundColor = "#1a1a1a"
                othersNavTop.style.backgroundColor = "#1a1a1a"
                blogsNavTop.style.backgroundColor = "#1a1a1a"
                aboutNavTop.style.backgroundColor = "#1a1a1a"
                homeNavTop.style.backgroundColor = "#1a1a1a"

                light.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                light.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }

                homeNavTop.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                homeNavTop.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }

                aboutNavTop.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                aboutNavTop.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }

                blogsNavTop.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                blogsNavTop.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }

                othersNavTop.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                othersNavTop.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }

            //Quote
                quoteText.style.color = "#d9d9d9"

            //WebName
                webName.style.color = "#d9d9d9"
                credential.style.color = "#d9d9d9"

            //Content
                headingOne.style.color = "#cccccc"
                headingTwo.style.color = "#cccccc"
                contentOne.style.color = "#d9d9d9"
                contentTwo.style.color = "#d9d9d9"
                contentThree.style.color = "#d9d9d9"
                contentFour.style.color = "#d9d9d9"

            //Footer
                footerNav.style.backgroundColor = "#1a1a1a"
                footerMain.style.backgroundColor = "#1a1a1a"


                bottomHome.style.backgroundColor = "#1a1a1a"
                bottomAbout.style.backgroundColor = "#1a1a1a"
                bottomBlogs.style.backgroundColor = "#1a1a1a"
                bottomOthers.style.backgroundColor = "#1a1a1a"
                bottomBack.style.backgroundColor = "#1a1a1a"

                bottomHome.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomHome.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }

                bottomAbout.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomAbout.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }

                bottomBlogs.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomBlogs.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }

                bottomOthers.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomOthers.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }

                bottomBack.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomBack.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#1a1a1a"
                }


    }

    //Activate light
    light.onclick = function lightMode () {
        dark.style.display = "inline"
        light.style.display = "none"


        //Styling
            //Body
            body.style.backgroundColor = "transparent"


            //Nav
                navBG.style.backgroundColor = "#333333"
                headName.style.color = "#f2f2f2"
                othersNavTop.style.backgroundColor = "#333333"
                blogsNavTop.style.backgroundColor = "#333333"
                aboutNavTop.style.backgroundColor = "#333333"
                homeNavTop.style.backgroundColor = "#333333"

                homeNavTop.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                homeNavTop.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#333333"
                }

                aboutNavTop.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                aboutNavTop.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#333333"
                }

                blogsNavTop.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                blogsNavTop.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#333333"
                }

                othersNavTop.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                othersNavTop.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#333333"
                }

            //Quote
                quoteText.style.color = "#000000"

            //WebName
                webName.style.color = "#000000"
                credential.style.color = "#000000"

            //Content
                headingOne.style.color = "#000"
                headingTwo.style.color = "#000"
                contentOne.style.color = "#000"
                contentTwo.style.color = "#000"
                contentThree.style.color = "#000"
                contentFour.style.color = "#000"

            //Footer
                footerNav.style.backgroundColor = "#333"
                footerMain.style.backgroundColor = "#333"


                bottomHome.style.backgroundColor = "#333"
                bottomAbout.style.backgroundColor = "#333"
                bottomBlogs.style.backgroundColor = "#333"
                bottomOthers.style.backgroundColor = "#333"
                bottomBack.style.backgroundColor = "#333"

                bottomHome.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomHome.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#333"
                }

                bottomAbout.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomAbout.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#333"
                }

                bottomBlogs.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomBlogs.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#333"
                }

                bottomOthers.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomOthers.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#333"
                }

                bottomBack.onmouseenter = function () {
                    this.style.color = "#1a1a1a"
                    this.style.backgroundColor = "#e6e6e6"
                }
                bottomBack.onmouseout = function () {
                    this.style.color = "#e6e6e6"
                    this.style.backgroundColor = "#333"
                }

    }