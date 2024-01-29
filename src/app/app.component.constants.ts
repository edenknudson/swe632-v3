export interface Event {
  name: string,
  date: number,
  dateEnding: string,
  details: string,
  panelOpenState: boolean,
  link: string
}

export const EventDetails: Event[] = [
  {
    name: 'Invention of the Poptart',
    date: 1964,
    dateEnding: 'AD',
    details: 'William A. Turner invented the poptart 1964. Initially called Fruit Scones, the name was soon changed to Pop-Tarts as a pun on the then popular Pop Art movement.',
    panelOpenState: false,
    link: 'https://www.poptarts.com/en_US/our-story.html'
  },
  {
      name: 'Discovery of Machu Picchu',
      date: 1911,
      dateEnding: 'AD',
      details: 'In the summer of 1911, the American archaeologist Hiram Bingham arrived in Peru with a small team of explorers hoping to find Vilcabamba, the last Inca stronghold to fall to the Spanish.',
      panelOpenState: false,
      link: 'https://www.history.com/topics/south-america/machu-picchu#machu-picchu-s-discovery-by-hiram-bingham'
  },
  {
    name: 'First Crossword',
    date: 1913,
    dateEnding: 'AD',
    details: 'The first crossword puzzle was created by Arthur Wynne, an editor at the New York World, in 1913. He called it “FUN’s Word-Cross Puzzle” and printed it in the “Fun” section of the newspaper',
    panelOpenState: false,
    link: 'https://blog.mycrosswordmaker.com/the-history-of-crossword-puzzles/'
  },
  {
    name: 'Landing on the Moon',
    date: 1969,
    dateEnding: 'AD',
    details: 'On July 20, 1969, American astronauts Neil Armstrong and Edwin "Buzz" Aldrin became the first humans ever to land on the moon. About six-and-a-half hours later, Armstrong became the first person to walk on the moon. As he took his first step, Armstrong famously said, "That\'s one small step for man, one giant leap for mankind."',
    panelOpenState: false,
    link: 'https://www.history.com/topics/1960s/moon-landing-1969'
  },
  {
    name: 'Painting of the Mona Lisa',
    date: 1519,
    dateEnding: 'AD',
    details: 'The Mona Lisa was painted when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century.',
    panelOpenState: false,
    link: 'https://www.britannica.com/topic/Mona-Lisa-painting'
  },
  {
    name: 'Discovery of Neptune',
    date: 1846,
    dateEnding: 'AD',
    details: ' The discovery was made based on mathematical calculations of its predicted position due to observed perturbations in the orbit of the planet Uranus. The discovery was made using a telescope since Neptune is too faint to be visible to the naked eye, owing to its great distance from the Sun.',
    panelOpenState: false,
    link: 'https://www.nasa.gov/history/175-years-ago-astronomers-discover-neptune-the-eighth-planet/'
  },
  {
    name: 'Construction of Pyramids of Giza',
    date: 2550,
    dateEnding: 'BCE',
    details: 'No pyramids are more celebrated than the Great Pyramids of Giza, located on a plateau on the west bank of the Nile River, on the outskirts of modern-day Cairo. The oldest and largest of the three pyramids at Giza, known as the Great Pyramid, is the only surviving structure out of the famed Seven Wonders of the Ancient World. It was built for Pharaoh Khufu (Cheops, in Greek), Sneferu’s successor and the second of the eight kings of the fourth dynasty.',
    panelOpenState: false,
    link: 'https://www.history.com/topics/ancient-egypt/the-egyptian-pyramids#section_3'
  }
];
