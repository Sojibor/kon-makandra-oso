
        // 1. Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // 2. Intersection Observer for Scroll Animations
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // 3. Interactive Architectural Zones Data & Logic
        const zones = {
            1: {
                title: "Top / Spirituele Ruimte",
                desc: "Meditatie, rituelen, sterrenkennis. Het hoogste punt van het gebouw, ontworpen voor stilte, reflectie en verbinding met de kosmos. Het dient als een heilige ruimte voor Winti-rituelen en spirituele praktijken.",
                img: "images/zone-1-spiritual.jpg"
            },
            2: {
                title: "Centrale Atrium",
                desc: "Ontmoeting, evenementen, ceremonie. Het hart van het gebouw, een grote open ruimte die alle niveaus met elkaar verbindt. Het heeft een centrale fontein en een torenhoge houten pilaar versierd met traditionele gravures.",
                img: "images/zone-2-atrium.jpg"
            },
            3: {
                title: "Aula / Grote Zaal",
                desc: "Lezingen, conferenties, film, optredens. Een multifunctionele auditorium ontworpen voor grote bijeenkomsten, lezingen en culturele optredens. Uitgerust met state-of-the-art audiovisuele technologie.",
                img: "images/zone-3-aula.jpg"
            },
            4: {
                title: "Klaslokalen / Workshops",
                desc: "Onderwijs, trainingen, kennisoverdracht. Flexibele educatieve ruimtes ontworpen voor workshops, taalcursussen en culturele trainingsprogramma's voor alle leeftijden.",
                img: "images/zone-4-classrooms.jpg"
            },
            5: {
                title: "Bibliotheek & Onderzoekscentrum",
                desc: "Archief, digitale kennis, studieplekken. Een uitgebreid onderzoekscentrum met boeken, digitale archieven en mondelinge geschiedenisopnames gewijd aan het Afro-Surinaamse erfgoed.",
                img: "images/zone-5-library.jpg"
            },
            6: {
                title: "Tentoonstellingsruimte",
                desc: "Geschiedenis, kunst, cultuur. Een dynamische galerieruimte voor permanente en tijdelijke tentoonstellingen van historische artefacten, hedendaagse kunst en culturele verhalen.",
                img: "images/zone-6-exhibition.jpg"
            },
            7: {
                title: "Receptie / Entree",
                desc: "Ontvangst, informatie, winkel. De gastvrije toegangspoort tot het centrum, met bezoekersinformatie, ticketverkoop en een winkel voor lokale ambachtslieden en culturele goederen.",
                img: "images/zone-7-reception.jpg"
            },
            8: {
                title: "Tuinen & Waterpartijen",
                desc: "Natuur, zuivering, rust, ritueel. Weelderige botanische tuinen met inheemse Surinaamse planten, waterpartijen voor zuiveringsrituelen en rustige paden voor reflectie.",
                img: "images/zone-8-gardens.jpg"
            },
            9: {
                title: "Verblijfsruimte / Gasten",
                desc: "Onderzoekers, kunstenaars, elders. Comfortabele accommodatie op het terrein voor gastonderzoekers, artists-in-residence en elders die deelnemen aan kennisoverdrachtsprogramma's.",
                img: "images/zone-9-residence.jpg"
            },
            10: {
                title: "Eten & Drinken",
                desc: "Restaurant, community kitchen. Een culinaire ruimte met traditionele Surinaamse gerechten en gezonde opties, die gemeenschapsbinding bevordert tijdens het eten.",
                img: "images/zone-10-food.jpg"
            },
            11: {
                title: "Kantoren / Projectruimtes",
                desc: "Team, administratie, overleg. Administratief hoofdkwartier en collaboratieve werkruimtes voor het personeel, onderzoekers en projectteams van het centrum.",
                img: "images/zone-11-offices.jpg"
            }
        };

        function openZone(zoneId) {
            // Update active tab styling
            const tabs = document.querySelectorAll('.zone-tab');
            tabs.forEach((tab, index) => {
                if (index + 1 === zoneId) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });

            // Update content
            const zone = zones[zoneId];
            document.getElementById('zone-number').textContent = zoneId;
            document.getElementById('zone-title').textContent = zone.title;
            document.getElementById('zone-desc').textContent = zone.desc;
            
            // Update image with a subtle fade effect
            const imgElement = document.getElementById('zone-image');
            imgElement.style.opacity = '0';
            setTimeout(() => {
                imgElement.src = zone.img;
                imgElement.style.opacity = '1';
            }, 200);
        }

        // 4. Navbar scroll shadow effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-zand');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-zand');
            }
        });