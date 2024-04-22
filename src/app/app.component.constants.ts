export interface Event {
  name: string,
  date: number,
  dateEnding: string,
  details: string,
  link: string,
  index: number,
  image: string,
  answer?: number
}

export const EventDetails: Event[] = [
  {
    index: 0,
    name: 'Invention of the Poptart',
    date: 1964,
    dateEnding: 'AD',
    details: 'William A. Turner invented the poptart 1964. Initially called Fruit Scones, the name was soon changed to Pop-Tarts as a pun on the then popular Pop Art movement.',
    link: 'https://www.poptarts.com/en_US/our-story.html',
    image: 'https://i.huffpost.com/gen/2112636/thumbs/o-1964-570.jpg?6'
  },
  {
    index: 0,
    name: 'Discovery of Machu Picchu',
    date: 1911,
    dateEnding: 'AD',
    details: 'In the summer of 1911, the American archaeologist Hiram Bingham arrived in Peru with a small team of explorers hoping to find Vilcabamba, the last Inca stronghold to fall to the Spanish.',
    link: 'https://www.history.com/topics/south-america/machu-picchu#machu-picchu-s-discovery-by-hiram-bingham',
    image: 'https://media.wired.com/photos/5933730758b0d64bb35d56a8/master/w_2560%2Cc_limit/machu_picchu_630px.jpg'
  },
  {
    index: 0,
    name: 'First Crossword',
    date: 1913,
    dateEnding: 'AD',
    details: 'The first crossword puzzle was created by Arthur Wynne, an editor at the New York World, in 1913. He called it “FUN’s Word-Cross Puzzle” and printed it in the “Fun” section of the newspaper',
    link: 'https://blog.mycrosswordmaker.com/the-history-of-crossword-puzzles/',
    image: 'https://images2.minutemediacdn.com/image/upload/v1690906807/images/voltaxMediaLibrary/mmsport/mentalfloss/01h6ryckap3rmwfcp21e.jpg'
  },
  {
    index: 0,
    name: 'Landing on the Moon',
    date: 1969,
    dateEnding: 'AD',
    details: 'On July 20, 1969, American astronauts Neil Armstrong and Edwin "Buzz" Aldrin became the first humans ever to land on the moon. About six-and-a-half hours later, Armstrong became the first person to walk on the moon. As he took his first step, Armstrong famously said, "That\'s one small step for man, one giant leap for mankind."',
    link: 'https://www.history.com/topics/1960s/moon-landing-1969',
    image: 'https://aerospace.honeywell.com/content/dam/aerobt/en/images/learn/about-us/blogs/horizontal/AeroBT-s_285636983_moon-landing_2880x1440.jpg'
  },
  {
    index: 0,
    name: 'Painting of the Mona Lisa',
    date: 1519,
    dateEnding: 'AD',
    details: 'The Mona Lisa was painted when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century.',
    link: 'https://www.britannica.com/topic/Mona-Lisa-painting',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
  },
  {
    index: 0,
    name: 'Discovery of Neptune',
    date: 1846,
    dateEnding: 'AD',
    details: ' The discovery was made based on mathematical calculations of its predicted position due to observed perturbations in the orbit of the planet Uranus. The discovery was made using a telescope since Neptune is too faint to be visible to the naked eye, owing to its great distance from the Sun.',
    link: 'https://www.nasa.gov/history/175-years-ago-astronomers-discover-neptune-the-eighth-planet/',
    image: 'https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-1-4614-5565-3_2/MediaObjects/270985_1_En_2_Figa_HTML.gif'
  },
  {
    index: 0,
    name: 'Construction of Pyramids of Giza',
    date: 2550,
    dateEnding: 'BCE',
    details: 'No pyramids are more celebrated than the Great Pyramids of Giza, located on a plateau on the west bank of the Nile River, on the outskirts of modern-day Cairo. The oldest and largest of the three pyramids at Giza, known as the Great Pyramid, is the only surviving structure out of the famed Seven Wonders of the Ancient World. It was built for Pharaoh Khufu (Cheops, in Greek), Sneferu’s successor and the second of the eight kings of the fourth dynasty.',
    link: 'https://www.history.com/topics/ancient-egypt/the-egyptian-pyramids#section_3',
    image: 'https://lp-cms-production.imgix.net/2020-11/GettyRF_1085205362.jpg?auto=format&w=1440&h=810&fit=crop&q=75'
  },
  {
    index: 0,
    name: 'Invention of the Telescope',
    date: 1608,
    dateEnding: 'AD',
    details: 'While there is evidence that the principles of telescopes were known in the late 16th century, the first telescopes were created in the Netherlands in 1608.',
    link: 'https://www.loc.gov/collections/finding-our-place-in-the-cosmos-with-carl-sagan/articles-and-essays/modeling-the-cosmos/galileo-and-the-telescope#:~:text=While%20there%20is%20evidence%20that,Jacob%20Metius%20independently%20created%20telescopes.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Emblemata_1624.jpg'
  },
  {
    index: 0,
    name: 'Discovery of Uranus',
    date: 1781,
    dateEnding: 'AD',
    details: 'Until 1781, the known solar system consisted of six planets.  On March 13 of that year, astronomer William Herschel observed a faint object in the constellation Gemini and noted that it moved slowly relative to the background stars. First thinking it a comet, Herschel later correctly identified it as a planet and wanted to name it after the monarch of his adopted United Kingdom. But astronomers decided to maintain the tradition of naming planets after mythological figures, and the seventh planet became known as Uranus.',
    link: 'https://www.nasa.gov/history/240-years-ago-astronomer-william-herschel-identifies-uranus-as-the-seventh-planet/',
    image: 'https://www.rmg.co.uk/sites/default/files/styles/full_width_1440/public/2023-07/52797919139_93262a7e5b_c.jpg?itok=MxzN2OEa'
  },
  {
    index: 0,
    name: 'Invention of the Violin',
    date: 1540,
    dateEnding: 'AD',
    details: 'The credit for the first violin is usually given to a Cremonese luthier named Andrea Amati who had made his name originally as a lute builder. He created at least two three string violins in the 1540s. He was then commissioned to build one of the first four-string violins by the wealthy Medici family in the 1550s.',
    link: 'https://www.theinstrumentplace.com/history-of-the-violin',
    image: 'https://www.violinschool.com/wp-content/uploads/2023/07/The-History-of-the-Violin-ViolinSchool-Featured-Image-1920px-x-1080px.jpg'
  },
  {
    index: 0,
    name: 'Invention of the Toothbrush',
    date: 1498,
    dateEnding: 'AD',
    details: 'The bristle toothbrush, similar to the type used today, was not invented until 1498 in China. The bristles were actually the stiff, coarse hairs taken from the back of a hog’s neck and attached to handles made of bone or bamboo.',
    link: 'https://www.loc.gov/everyday-mysteries/technology/item/who-invented-the-toothbrush-and-when-was-it-invented/',
    image: 'https://cdn.shopify.com/s/files/1/1233/1288/files/toothbrush_history_grande.jpg?152445251572727180'
  },
  {
    index: 0,
    name: 'Invention of the Compass',
    date: 1090,
    dateEnding: 'AD',
    details: 'Historians think China may have been the first civilization to develop a magnetic compass that could be used for navigation.',
    link: 'https://education.nationalgeographic.org/resource/compass/',
    image: 'https://m2.dalvey.com/media/magefan_blog/history-of-the-compass-lodestone-ladle.jpg'
  },
  {
    index: 0,
    name: 'Invention of Morse Code',
    date: 1838,
    dateEnding: 'AD',
    details: 'International Morse Code was used in World War II and in the Korean and Vietnam wars. It was used heavily by the shipping industry and for the safety of the seas up until the early 1990s.',
    link: 'https://www.britannica.com/topic/Morse-Code',
    image: 'https://cdn.britannica.com/18/146618-050-B398A5DB/telegraph-transmitter-Morse-Code.jpg'
  },
  {
    index: 0,
    name: 'Discovery of Bronze',
    date: 2200,
    dateEnding: 'BCE',
    details: 'The Bronze Age was the first truly transformative moment in civilization. For the first time ever, humanity’s dependency on ineffectual and less malleable materials lessened. Stone or wood were quickly replaced with the much more advanced bronze.',
    link: 'https://bronzeconnection.com/history-of-bronze/',
    image: 'https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/mp5oyneev2ioogeinhqy.jpg'
  },
  {
    index: 0,
    name: 'Invention of the Hourglass',
    date: 900,
    dateEnding: 'AD',
    details: 'The first hourglass, or sand clock, is said to have been invented by a French monk called Liutprand in the 8th century AD.',
    link: 'https://www.guinnessworldrecords.com/world-records/first-hourglass',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ambrogio_Lorenzetti_002-detail-Temperance.jpg/220px-Ambrogio_Lorenzetti_002-detail-Temperance.jpg'
  },
  {
    index: 0,
    name: 'Invention of the Encyclopedia',
    date: 100,
    dateEnding: 'AD',
    details: 'The earliest encyclopedic work to have survived to modern times is the Naturalis Historia of Pliny the Elder, a Roman statesman living in the 1st century AD. He compiled a work of 37 chapters covering natural history, architecture, medicine, geography, geology, and all aspects of the world around him.',
    link: 'https://www.britannica.com/topic/encyclopaedia/History-of-encyclopaedias',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Pliny_the_Elder%2C_Natural_History%2C_Florence%2C_Plut._82.4.jpg'
  },
  {
    index: 0,
    name: 'The Pythagorean Theorem',
    date: 548,
    dateEnding: 'BCE',
    details: 'Pythagoras was a Greek philosopher, mathematician, and founder of the Pythagorean brotherhood that, although religious in nature, formulated principles that influenced the thought of Plato and Aristotle and contributed to the development of mathematics and Western rational philosophy.',
    link: 'https://www.britannica.com/science/Pythagorean-theorem',
    image: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3B5dGguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0='
  },
  {
    index: 0,
    name: 'Invention of the Ball Point Pen',
    date: 1888,
    dateEnding: 'AD',
    details: 'An American, John J Loud, received the first patent for a ballpoint pen back in 1888. Loud, a lawyer and occasional inventor, wanted an ink pen which would be able to write on rougher materials such as wood and leather as well as paper.',
    link: 'https://www.bbc.com/future/article/20201028-history-of-the-ballpoint-pen',
    image: 'https://pbs.twimg.com/media/FDPN7upVcAEiCcj?format=jpg&name=large'
  },
  {
    index: 0,
    name: 'Invention of the Celsius Scale',
    date: 1742,
    dateEnding: 'AD',
    details: 'Celsius was professor of astronomy at Uppsala University from 1730 to 1744, and in 1740 he built the Uppsala Observatory. In 1733 Celsius published a collection of 316 observations of the aurora borealis, or northern lights.',
    link: 'https://www.britannica.com/biography/Anders-Celsius',
    image: 'https://assets-us-01.kc-usercontent.com/9dd25524-761a-000d-d79f-86a5086d4774/40ff1aca-98ff-4679-8b9a-8b58a8c08138/celsius3.jpg?w=800&h=600&auto=format&q=75&fit=crop'
  },
  {
    index: 0,
    name: 'Lord of the Rings Published (first volume)',
    date: 1954,
    dateEnding: 'AD',
    details: 'The Lord of the Rings is an epic high fantasy novel written by J.R.R. Tolkien, which was later fitted as a trilogy. The story began as a sequel to Tolkien\'s earlier fantasy book The Hobbit, and soon developed into a much larger story. At publication, it was divided into The Fellowship of the Ring, The Two Towers, and The Return of the King.',
    link: 'https://www.tolkienestate.com/writing/the-lord-of-the-rings/',
    image: 'https://www.bishopsstortfordindependent.co.uk/_media/img/7KEHDN8R2BA350IP5CUN.jpg'
  },
  {
    index: 0,
    name: 'Publication of Alice in Wonderland',
    date: 1865,
    dateEnding: 'AD',
    details: 'The story was originally told by Carroll to Lorina, Alice, and Edith Liddell (the daughters of Henry George Liddell, dean of Christ Church, Oxford, where the author had studied and held a fellowship) on a picnic in July 1862. Alice asked Carroll to write out the stories for her, and in response he produced a hand-lettered collection entitled Alice’s Adventures Under Ground.',
    link: 'https://www.britannica.com/topic/Alices-Adventures-in-Wonderland',
    image: 'https://i0.wp.com/www.raptisrarebooks.com/images/183536/alices-adventures-in-wonderland-lewis-carroll-charles-lutwidge-dodgson-first-edition-signed.jpg?fit=1250%2C1000&ssl=1'
  },
  {
    index: 0,
    name: 'Invention of the Typewriter',
    date: 1868,
    dateEnding: 'AD',
    details: 'The invention of various kinds of machines was attempted in the 19th century. Most were large and cumbersome, some resembling pianos in size and shape. All were much slower to use than handwriting. Finally, in 1867, the American inventor Christopher Latham Sholes read an article in the journal Scientific American describing a new British-invented machine and was inspired to construct what became the first practical typewriter. His second model, patented on June 23, 1868, wrote at a speed far exceeding that of a pen.',
    link: 'https://www.britannica.com/technology/typewriter',
    image: 'https://cdn.britannica.com/60/189960-004-48EE9799/typewriter-Remington-Standard-Frederick-Douglass.jpg'
  },
  {
    index: 0,
    name: 'Invention of Sign Language',
    date: 1620,
    dateEnding: 'AD',
    details: 'The first book on deaf education, published in 1620 by Juan Pablo Bonet in Madrid, included a detailed account of the use of a manual alphabet to teach deaf students to read and speak.',
    link: 'https://en.wikipedia.org/wiki/History_of_sign_language',
    image: 'https://blogs.bl.uk/.a/6a00d8341c464853ef0240a4a97d69200b-320wi'
  },
  {
    index: 0,
    name: 'Invention of the Can Opener',
    date: 1858,
    dateEnding: 'AD',
    details: 'The first can opener was actually an American invention, patented by Ezra J. Warner on January 5, 1858. At this time, writes Connecticut History, “iron cans were just starting to be replaced by thinner steel cans.”',
    link: 'https://www.smithsonianmag.com/smart-news/why-can-opener-wasnt-invented-until-almost-50-years-after-can-180964590/',
    image: 'https://cdn.arstechnica.net/wp-content/uploads/2017/11/640px-Apriscatole_-_Musei_del_cibo_-_Pomodoro_-_048.jpg'
  },
  {
    index: 0,
    name: 'Painting of the \'Last Supper\' by Leonardo da Vinci',
    date: 1498,
    dateEnding: 'AD',
    details: 'Last Supper, one of the most famous artworks in the world, painted by Leonardo da Vinci probably between 1495 and 1498 for the Dominican monastery Santa Maria delle Grazie in Milan. It depicts the dramatic scene described in several closely connected moments in the Gospels, including Matthew 26:21–28, in which Jesus declares that one of the Apostles will betray him and later institutes the Eucharist.',
    link: 'https://www.britannica.com/topic/Last-Supper-fresco-by-Leonardo-da-Vinci',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1920px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg',
  },
  {
      index: 0,
      name: 'Burial of the Terracotta Army',
      date: 221,
      dateEnding: 'BCE',
      details: 'In March 1974, a group of peasants digging a well in China’s drought-parched Shaanxi province unearthed fragments of a clay figure—the first evidence of what would turn out to be one of the greatest archaeological discoveries of modern times. Near the unexcavated tomb of Qin Shi Huang—who proclaimed himself first emperor of China in 221 B.C.E.—lay an extraordinary underground treasure: an entire army of life-size terra-cotta soldiers and horses, interred for more than 2,000 years.',
      link: 'https://www.smithsonianmag.com/history/what-you-need-know-about-chinas-terra-cotta-warriors-first-qin-emperor-30942673/',
      image: 'https://th-thumbnailer.cdn-si-edu.com/gEmwgjYISJm02jqY-1LmdydnhEo=/1000x750/filters:no_upscale():focal(3072x2048:3073x2049)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/eb/07/eb072ca5-f39d-4932-9e8c-8a837218c2e0/gettyimages-522660430.jpg',
    },
    {
      index: 0,
      name: 'Painting of the Sistine Chapel',
      date: 1483,
      dateEnding: 'AD',
      details: 'The Sistine Chapel is located inside the Vatican Museums in Rome and every year is visited by millions of tourists from all over the world. The Sistine Chapel is decorated with splendid frescoes by Michelangelo. His wonderful works cover the ceiling and the back wall (with the Last Judgement) above the altar.',
      link: 'https://www.thesistinechapel.org/',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsmarthistory.org%2Fmichelangelo-ceiling-of-the-sistine-chapel%2F&psig=AOvVaw0zcR5mh8hIaNNcbT1gg6H_&ust=1713738046475000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCG_fDp0YUDFQAAAAAdAAAAABAY',
    },
    {
      index: 0,
      name: 'Building of Angkor Wat',
      date: 1110,
      dateEnding: 'AD',
      details: 'Angkor is one of the most important archaeological sites in South-East Asia. Stretching over some 400 km2, including forested area, Angkor Archaeological Park contains the magnificent remains of the different capitals of the Khmer Empire, from the 9th to the 15th century. ',
      link: 'https://whc.unesco.org/en/list/668/',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/20171126_Angkor_Wat_4712_DxO.jpg/1280px-20171126_Angkor_Wat_4712_DxO.jpg',
    },
    {
      index: 0,
      name: 'Invention of fractions',
      date: 1650,
      dateEnding: 'AD',
      details: 'The papyrus is called Rhind’s papyrus or Ahmesh’s (it also has the more aseptic name of pBM 10057 and pBM 10058, the pair of initials of the two parts of the artefact given by the British Museum) and its fame derives from the fact that it is one of the oldest and most complete examples of an Egyptian mathematical manual.',
      link: 'https://en.wikipedia.org/wiki/Egyptian_fraction',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Rhind_Mathematical_Papyrus.jpg/640px-Rhind_Mathematical_Papyrus.jpg',
    },
    {
      index: 0,
      name: 'Invention of the + and - signs',
      date: 1489,
      dateEnding: 'AD',
      details: 'In his 1489 treatise, Johannes Widmann referred to the symbols − and + as minus and mer (Modern German mehr; "more"): "[...] was − ist das ist minus [...] und das + das ist mer das zu addirst" They weren\'t used for addition and subtraction in the treatise, but were used to indicate surplus and deficit; usage in the modern sense is attested in a 1518 book by Henricus Grammateus.',
      link: 'https://en.wikipedia.org/wiki/Johannes_Widmann',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Johannes_Widmann-Mercantile_Arithmetic_1489.jpg',
    },
    {
      index: 0,
      name: 'The Louvre Pyramid completed',
      date: 1989,
      dateEnding: 'AD',
      details: 'In July 1983, I.M. Pei, who had already designed extensions for the Museum of Fine Arts in Boston and the National Gallery of Art in Washington, was appointed architect for the Grand Louvre project, which had been commissioned by French President François Mitterrand in 1981. Pei came up with the idea of a central underground lobby affording direct access to the museum’s three wings, which would transform visitor circulation inside the Louvre.',
      link: 'https://www.louvre.fr/en/explore/the-palace/a-pyramid-for-a-symbol',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.architectmagazine.com%2Fawards%2Faia-awards%2Flouvre-pyramid-the-folly-that-became-a-triumph_o&psig=AOvVaw0hHlYMab70vHViyJ-yBXpw&ust=1713738875474000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjGwfrs0YUDFQAAAAAdAAAAABAD',
    },
    {
      index: 0,
      name: 'Discovery of the molecule',
      date: 1811,
      dateEnding: 'AD',
      details: 'The concept of molecules was first introduced in 1811 by Amadeo Avogadro and was accepted by many chemists based on Dalton\'s laws of Definite and Multiple Proportions (1803-1808).',
      link: 'https://www.newworldencyclopedia.org/entry/Molecule#:~:text=The%20concept%20of%20molecules%20was,Proportions%20(1803%2D1808).',
      image: 'https://cdn.britannica.com/10/194610-050-785C0275/Amedeo-Avogadro.jpg',
    },
    {
      index: 0,
      name: 'Discovery of anesthesia',
      date: 1842,
      dateEnding: 'AD',
      details: 'The history of anesthesia is relevant to dentistry, as two dentists, Horace Wells and his one-time pupil and partner, William T.G. Morton, pioneered its use. In the United States in the early 1800s, traveling entertainers who called themselves professors went about delivering lectures on ether and nitrous oxide and demonstrating their effects. Crawford W. Long, a Georgia physician had attended ether frolics while a student, and in 1842, he used ether when he removed two small tumors from the neck of his friend, James Venable.',
      link: 'https://www.sciencedirect.com/topics/medicine-and-dentistry/history-of-anesthesia#:~:text=On%20October%2016%2C%201846%2C%20Morton,become%20the%20first%20professional%20anesthetist.',
      image: 'https://www.umhs-sk.org/hubfs/FIRST-AMERICAN-PROCEDURE-USING-ANESTHESIA.jpg',
    },
    {
      index: 0,
      name: 'Discovery of blood types',
      date: 1900,
      dateEnding: 'AD',
      details: 'Karl Landsteiner has been credited for the discovery of ABO blood group system in 1900. His extensive research on serology based on simple but strong scientific reasoning led to identification of major blood groups such as O, A, and B types, compatibility testing, and subsequent transfusion practices. He was awarded Noble Prize in 1930 for this discovery.',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4260296',
      image: 'https://www.thoughtco.com/thmb/-WmHRxTQ0Krs2Pk0sIc5_MWs1F8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/karl_landsteiner-5c4e100d46e0fb00014a2c31.jpg',
    },
    {
      index: 0,
      name: 'The arrival of the Mayflower to America',
      date: 1620,
      dateEnding: 'AD',
      details: 'Mayflower, in American colonial history, the ship that carried the Pilgrims from England to Plymouth, Massachusetts, where they established the first permanent New England colony in 1620. Although no detailed description of the original vessel exists, marine archaeologists estimate that the square-rigged sailing ship weighed about 180 tons and measured 90 feet (27 metres) long.',
      link: 'https://www.britannica.com/topic/Mayflower-ship',
      image: 'https://cdn.britannica.com/22/171122-050-C2D09E78/Mayflower-II.jpg',
    },
    {
      index: 0,
      name: 'The invasion of Normandy',
      date: 1944,
      dateEnding: 'AD',
      details: 'On June 6, 1944, the long-awaited Allied landing in northern France began. Facing Hitlers Atlantic Wall, soldiers of the United States, United Kingdom, Canada, and other Allied nations landed on beaches in Normandy, beginning a campaign which lasted until July 24, 1944.',
      link: 'https://www.nationalww2museum.org/war/topics/d-day-and-normandy-campaign',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/NormandySupply_edit.jpg',
    },
    {
      index: 0,
      name: 'Discovery of continental drift',
      date: 1912,
      dateEnding: 'AD',
      details: 'Continental drift describes one of the earliest ways geologists thought continents moved over time. Today, the theory of continental drift has been replaced by the science of plate tectonics. The theory of continental drift is most associated with the scientist Alfred Wegener. In the early 20th century, Wegener published a paper explaining his theory that the continental landmasses were “drifting” across the Earth, sometimes plowing through oceans and into each other. He called this movement continental drift.',
      link: 'https://education.nationalgeographic.org/resource/continental-drift/',
      image: 'https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A4cb0ee3c2a855b9653021c7a4ecd9b24efe220cbba396497400c739c%2BIMAGE_TINY%2BIMAGE_TINY.1',
    },
    {
      index: 0,
      name: 'Discovery of microscopic life',
      date: 1673,
      dateEnding: 'AD',
      details: 'Leeuwenhoek observed animal and plant tissue, human sperm and blood cells, minerals, fossils, and many other things that had never been seen before on a microscopic scale. He presented his findings to the Royal Society in London, where Robert Hooke was also making remarkable discoveries with a microscope. ',
      link: 'https://www.sciencemuseum.org.uk/objects-and-stories/medicine/microscope',
      image: 'https://www.bbvaopenmind.com/wp-content/uploads/2018/08/1-Leeuwenhoek-1.jpeg',
    },
    {
      index: 0,
      name: 'Discovery of the Rosetta Stone',
      date: 1799,
      dateEnding: 'AD',
      details: 'Rosetta Stone, ancient Egyptian stone bearing inscriptions in several languages and scripts; their decipherment led to the understanding of hieroglyphic writing. An irregularly shaped stone of black granite 3 feet 9 inches (114 cm) long and 2 feet 4.5 inches (72 cm) wide, and broken in antiquity, it was found near the town of Rosetta (Rashīd), about 35 miles (56 km) northeast of Alexandria. It was discovered by a Frenchman named Bouchard or Boussard in August 1799.',
      link: 'https://www.britannica.com/topic/Rosetta-Stone',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Rosetta_Stone.JPG',
    },
    {
      index: 0,
      name: 'Discovery of X rays',
      date: 1895,
      dateEnding: 'AD',
      details: 'W.C. Röntgen reported the discovery of X-rays in December 1895 after seven weeks of assiduous work during which he had studied the properties of this new type of radiation able to go through screens of notable thickness. He named them X-rays to underline the fact that their nature was unknown.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/8696882',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*PrUspuycSUPuSug6g26DtQ.jpeg',
    },
    {
      index: 0,
      name: 'Discovery of the language of bees',
      date: 1927,
      dateEnding: 'AD',
      details: 'As Karl von Frisch (1886–1982) discovered during World War II, bees communicate the location of food sources to each other through complex circle and waggle dances. ',
      link: 'https://press.uchicago.edu/ucp/books/book/chicago/D/bo15220404.html',
      image: 'https://m.media-amazon.com/images/I/A1s2RB5KhsL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      index: 0,
      name: 'Discovery of the caves of Lascaux',
      date: 1940,
      dateEnding: 'AD',
      details: 'On 12 September 1940, the entrance to the Lascaux Cave was discovered on the La Rochefoucauld-Montbel lands by 18-year-old Marcel Ravidat when his dog, Robot, investigated a hole left by an uprooted tree.',
      link: 'https://en.wikipedia.org/wiki/Lascaux',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Lascaux_painting.jpg',
    },
    {
      index: 0,
      name: 'Invention of the teddy bear',
      date: 1902,
      dateEnding: 'AD',
      details: 'It all began when Theodore Roosevelt was on a bear hunting trip near Onward, Mississippi on November 14, 1902. Mississippi\'s Governor Andrew H. Longino had invited him, but unlike other hunters in the group, Theodore had not located a single bear. Roosevelt\'s assistants, led by Holt Collier, a born slave and former Confederate cavalryman, cornered and tied a black bear to a willow tree. They summoned Roosevelt and suggested that he shoot it. Viewing this as extremely unsportsmanlike, Roosevelt refused to shoot the bear. The news of this event spread quickly through newspaper articles across the country. Clifford Berryman, a political cartoonist, read the article and decided to lightheartedly satirize the president\'s refusal to shoot the bear. Berryman\'s cartoon appeared in the Washington Post on November 16, 1902. Morris Michtom, a Brooklyn candy shop owner, saw the cartoon and had an idea. He and his wife Rose also made stuffed animals, and Michtom decided to create a stuffed toy bear and dedicate it to the president who refused to shoot a bear. He called it \'Teddy\'s Bear\'.',
      link: 'https://www.nps.gov/thrb/learn/historyculture/storyofteddybear.htm',
      image: 'https://assets.editorial.aetnd.com/uploads/2020/01/theodore-roosevelt-gettyimages-2546199.jpg',
    },
    {
      index: 0,
      name: 'Construction of the Tower of Pisa',
      date: 1173,
      dateEnding: 'AD',
      details: 'Leaning Tower of Pisa, medieval structure in Pisa, Italy, that is famous for the settling of its foundations, which caused it to lean 5.5 degrees from the perpendicular in the late 20th century.',
      link: 'https://www.britannica.com/topic/Leaning-Tower-of-Pisa',
      image: 'https://cdn.sanity.io/images/cxgd3urn/production/48faff9ce744f01887f5d07ebb4cdef3dcf6dd6a-744x992.jpg?w=1200&h=1600&fit=crop&auto=format',
    },
];
