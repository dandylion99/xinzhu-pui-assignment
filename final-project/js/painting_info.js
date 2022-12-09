const movements = {
    "Neoclassicism":{
        "img": "Oath_of_the_Horatii.jpeg",
        "short_code": "N",
        "theme_color": "#D09C6D",
        "main_bg_color": "#F1E1D3"
    },
    "Romanticism":{
        "img": "The_Raft_of_the_Medusa.jpeg",
        "short_code": "Ro",
        "theme_color": "#D09C6D",
        "main_bg_color": "#F1E1D3"
    },
    "Realism":{
        "img":"The_Gleaners.jpeg",
        "short_code": "Re",
        "theme_color": "#D09C6D",
        "main_bg_color": "#F1E1D3"
    },
    "Impressionism":{
        "img":"Impression_Sunrise.png",
        "short_code": "I",
        "theme_color": "#F38181",
        "main_bg_color": "#FCD9D9"
    },
    "Post-Impressionism":{
        "img":"The_Starry_Night.jpeg",
        "short_code": "P",
        "theme_color": "#D09C6D",
        "main_bg_color": "#F1E1D3"
    },
    "Symbolism":{
        "img":"Death_and_Life.jpeg",
        "short_code": "S",
        "theme_color": "#D09C6D",
        "main_bg_color": "#F1E1D3"
    }
}

const paintings = {
    "N1":{
        "name": "Oath of the Horatii",
        "alt": "Three Horatii brothers on the left swearing upon their swords as takeing their oath, and the father in the center holding up three swords.",
        "img": "Oath_of_the_Horatii.jpeg",
        "artist": "Jacques-Louis David",
        "year": "1784",
        "intro": `The painting depicts the Roman Horatius family, who, according to Titus Livius' Ab Urbe Condita (From the Founding of the City) had been chosen for a ritual duel against three members of the Curiatii, a family from Alba Longa, in order to settle disputes between the Romans and the latter city.
        The painting immediately became a huge success with critics and the public, and remains one of the best known paintings in the Neoclassical style.
        `,
        "artist_year": "1748-1825",
        "artist_img": "Jacques_Louis_David.png",
        "artist_alt": "headshot of Jacques-Louis David",
        "artist_intro":  "Jacques-Louis David was a French painter in the Neoclassical style, considered to be the preeminent painter of the era. In the 1780s, his cerebral brand of history painting marked a change in taste away from Rococo frivolity toward classical austerity and severity and heightened feeling, harmonizing with the moral climate of the final years of the Ancien Régime."
    },
    "N2":{
        "name": "Dante and Virgil",
        "alt": "The author and his guide are looking on as two damned souls are entwined in eternal combat. One of the souls is being bitten on the neck by the other.",
        "img": "Dante_and_Virgil.jpeg",
        "artist": "William-Adolphe Bouguereau",
        "year": "1850",
        "intro": `The painting depicts a scene from Dante's Divine Comedy, which narrates a journey through Hell by Dante and his guide Virgil. In the scene the author and his guide are looking on as two damned souls are entwined in eternal combat. One of the souls is an alchemist and heretic named Capocchio. He is being bitten on the neck by the trickster Gianni Schicchi, who had used fraud to claim another man's inheritance.
        It was Bougereau's third and ultimately unsuccessful attempt to win the coveted Prix de Rome, even though he had submitted a work that he knew would appeal to the judges. He did however succeed in his efforts later in the year when Shepherds Find Zenobia on the Banks of the Araxes won the consolation second prize of the year.
        `,
        "artist_year": "1825-1905",
        "artist_img": "William_Adolphe_Bouguereau.png",
        "artist_alt": "headshot of William-Adolphe Bouguereau",
        "artist_intro": "William-Adolphe Bouguereau was a French academic painter. In his realistic genre paintings, he used mythological themes, making modern interpretations of classical subjects, with an emphasis on the female human body. During his life, he enjoyed significant popularity in France and the United States, was given numerous official honors, and received top prices for his work."
    },
    "N3":{
        "name": "The Source",
        "alt": "A nude standing upright between an opening in the rocks and holding in her hands a pitcher, from which water flows.",
        "img": "The_Source.jpeg",
        "artist": "Jean-Auguste-Dominique Ingres",
        "year": "1856",
        "intro": `The painting depicts a nude standing upright between an opening in the rocks and holding in her hands a pitcher, from which water flows. She thus represents a water source or spring, for which source is the normal French word, and which, in classical literature, is sacred to the Muses and a source of poetic inspiration. She stands between two flowers, with their "vulnerability to males who wish to pluck them", and is framed by ivy, plant of Dionysus the god of disorder, regeneration, and ecstasy. The water she pours out separates her from the viewer, as rivers mark boundaries of which the crossing is symbolically important.
        Art historians Frances Fowle and Richard Thomson suggest that there is a "symbolic unity of woman and nature" in The Source, where the flowering plants and water serve as a background which Ingres fills with woman's "secondary attributes".`,
        "artist_year": "1780-1867",
        "artist_img": "Jean_Auguste_Dominique_Ingres.png",
        "artist_alt": "headshot of Jean-Auguste-Dominique Ingres",
        "artist_intro": "Ingres was profoundly influenced by past artistic traditions and aspired to become the guardian of academic orthodoxy against the ascendant Romantic style. His expressive distortions of form and space made him an important precursor of modern art, influencing Picasso, Matisse and other modernists." 
    },
    "I1":{
        "name": "Olympia",
        "alt": "A nude woman lying on a bed being brought flowers by a servant",
        "img": "Olympia.jpg",
        "artist": "Édouard Manet",
        "year": "1863",
        "intro": `Olympia is a painting by Édouard Manet, first exhibited at the 1865 Paris Salon, which shows a nude woman ("Olympia") lying on a bed being brought flowers by a servant. Olympia was modelled by Victorine Meurent and Olympia's servant by the art model Laure. Olympia's confrontational gaze caused shock and astonishment when the painting was first exhibited because a number of details in the picture identified her as a prostitute. The French government acquired the painting in 1890 after a public subscription organized by Claude Monet. The painting is on display at the Musée d'Orsay, Paris.`,
        "artist_year": "1832-1883",
        "artist_img": "Manet.png",
        "artist_alt": "headshot of Édouard Manet",
        "artist_intro": `He was one of the first 19th-century artists to paint modern life, as well as a pivotal figure in the transition from Realism to Impressionism.
        Born into an upper-class household with strong political connections, Manet rejected the naval career originally envisioned for him; he became engrossed in the world of painting.`
    },
    "I2":{
        "name": "Impression, Sunrise",
        "alt": "The port of Le Havre at sunrise, two small rowboats in the foreground and the red Sun being the focal elements.",
        "img": "Impression_Sunrise.png",
        "artist": "Claude Monet",
        "year": "1872",
        "intro": `Impression, Sunrise is first shown at what would become known as the "Exhibition of the Impressionists" in Paris in April, 1874. The painting is credited with inspiring the name of the Impressionist movement.
        Monet depicts a mist, which provides a hazy background to the piece set in the French harbor. The orange and yellow hues contrast brilliantly with the dark vessels, where little, if any detail is immediately visible to the audience. It is a striking and candid work that shows the smaller boats in the foreground almost being propelled along by the movement of the water. This has, once again, been achieved by separate brushstrokes that also show various colors "sparkling" on the sea.`,
        "artist_year": "1840-1926",
        "artist_img": "Monet.png",
        "artist_alt": "headshot of Claude Monet",
        "artist_intro": `During his long career, Monet was the most consistent and prolific practitioner of impressionism's philosophy of expressing one's perceptions before nature, especially as applied to plein air (outdoor) landscape painting.`
    },
    "I3":{
        "name": "The Cradle",
        "alt": "A mother gazes towards her sleeping daughter in a crib.",
        "img": "Cradle.jpg",
        "artist": "Berthe Morisot",
        "year": "1872",
        "intro": `Morisot uses in this painting a reduced number of colors and a fluid brushstroke. The painting reflects an atmosphere of great intimacy, sweetness and protective love. This canvas, together with others like the one Claude Monet made of his son, Jean Monet at his Cradle (1867), attempt a new representation of childhood.
        Morisot uses in this painting a reduced number of colors and a fluid brushstroke. The painting reflects an atmosphere of great intimacy, sweetness and protective love. This canvas, together with others like the one Claude Monet made of his son, Jean Monet at his Cradle (1867), attempt a new representation of childhood.`,
        "artist_year": "1841-1895",
        "artist_img": "Morisot.png",
        "artist_alt": "headshot of Berthe Morisot",
        "artist_intro": `Berthe Marie Pauline Morisot was a French painter and a member of the circle of painters in Paris who became known as the Impressionists. She was described by art critic Gustave Geffroy in 1894 as one of "les trois grandes dames" (The three great ladies) of Impressionism alongside Marie Bracquemond and Mary Cassatt.`
    },
    "I4":{
        "name": "Luncheon of the Boating Party",
        "alt": "A group of Renoir's friends relaxing on a balcony at the Maison Fournaise restaurant along the Seine river.",
        "img": "Luncheon_of_the_Boating_Party.jpg",
        "artist": "Pierre-Auguste Renoir",
        "year": "1880",
        "intro": `The painting, combining figures, still-life, and landscape in one work, depicts a group of Renoir's friends relaxing on a balcony at the Maison Fournaise restaurant along the Seine river in Chatou, France. The painter and art patron, Gustave Caillebotte, is seated in the lower right. Renoir's future wife, Aline Charigot, is in the foreground playing with a small dog, an affenpinscher; she replaced an earlier woman who sat for the painting but with whom Renoir became annoyed. On the table is fruit and wine.
        The painting is thought to show the influence of Italian Renaissance painter Paolo Veronese on Renoir's style, in particular, The Wedding Feast at Cana (1563), one of Renoir's favorite Veronese paintings at the Louvre, which depicts a similar banquet theme to that of the Luncheon.
        `,
        "artist_year": "1841-1919",
        "artist_img": "Renoir.png",
        "artist_alt": "headshot of Pierre-Auguste Renoir",
        "artist_intro": `Pierre-Auguste Renoir was a French artist who was a leading painter in the development of the Impressionist style. As a celebrator of beauty and especially feminine sensuality, it has been said that "Renoir is the final representative of a tradition which runs directly from Rubens to Watteau.”
        `
    },
    "I5":{
        "name": "Boulevard Montmartre, Mardi Gras",
        "alt": "A nineteenth century Mardi Gras procession, also known as the Carnaval de Paris from the streets below extending its grandeur far into the distance.",
        "img": "Montmartre_Mardi_Gras.jpg",
        "artist": "Camille Pissarro",
        "year": "1897",
        "intro":  `This work is part of a series of fourteen paintings depicting different times of the day and seasons of the Boulevard Montmartre in Paris. Camille Pissarro is known as the "Father of Impression" for his "teacher's eye" of drawing what he saw in front of him.
        Pissarro depicts a nineteenth century Mardi Gras procession, also known as the Carnaval de Paris from the streets below extending its grandeur far into the distance. This street scene focuses on the idea of a "New Paris" that reveals an outdoor natural setting of beauty without adulteration in order to educate the public of real ideas. This painting marks one of Pissarro's last major works due to his weakening eyesight commonly associated with his elderly age. Many critics believe that this dis`,
        "artist_year": "1830-1903",
        "artist_img": "Pissarro.png",
        "artist_alt": "headshot of Camille Pissarro",
        "artist_intro": `His importance resides in his contributions to both Impressionism and Post-Impressionism.
        Pissarro is the only artist to have shown his work at all eight Paris Impressionist exhibitions. He "acted as a father figure not only to the Impressionists" but to all four of the major Post-Impressionists, Cézanne, Seurat, Gauguin, and van Gogh.
        `
    },

}