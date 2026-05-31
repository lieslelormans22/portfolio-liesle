import portfolioImg from '@/assets/Portfolio.png'
import projectsImg from '@/assets/Projects.png'
import artImg from '@/assets/Art.png'
import StatsImg from '@/assets/Stats.png'
import StatsPagina from '@/assets/StatsPagina.png'
import StatsHome from '@/assets/StatsHome.png'
import Dashboard from '@/assets/Dashboard.png'
import DashboardSchetsen from '@/assets/DashSchetsen.png'
import DashboardMoodboard from '@/assets/DashMoodboard.png'
import Retime from '@/assets/Retime.png'
import WhyRetime from '@/assets/WhyRetime.png'
import ProductRetime from '@/assets/ProductRetime.png'

export const projects = [
  {
    id: 1,
    titel: 'Stats tracker dashboard',
    subtitel: 'UI design',
    jaar: 'November 2025',
    categorie: 'Design',
    link: 'https://www.figma.com/design/pLHUgbAQHFQ7Gs2Lo2QNdj/Individuele-taskflow?node-id=42-289&t=kZhH2VfVaAlN3ZPv-1',
    beschrijving: 'Samen met Ruben Marques en Milan Creyf heb ik een dashboard ontworpen voor een stats tracker. We hebben ons gericht op het creëren van een gebruiksvriendelijke interface die gebruikers in staat stelt om hun statistieken gemakkelijk te bekijken en te analyseren. We hebben verschillende iteraties doorlopen om tot een ontwerp te komen dat zowel functioneel als visueel aantrekkelijk is.',
    tags: ['Figma', 'Design', 'UI', 'UX'],
    heroImg: StatsHome,
    extraImgs: [StatsImg, StatsPagina],
    volgendProject: 2,
  },
{
  id: 2,
  titel: 'Portfolio V1',
  subtitel: 'werkplekleren 1',
  jaar: '2025',
  categorie: ['Werkplekleren'],
  link: 'https://jouw-link.com',
  beschrijving: 'Voor Werkplekleren 1 heb ik een portfolio gemaakt waarin ik mijn projecten en vaardigheden presenteer. Ik heb geleerd hoe ik mijn werk op een aantrekkelijke manier kan tonen en welke tools ik daarvoor kan gebruiken. De bedoeling van dit portfolio is om mijn groei en ontwikkeling als designer te laten zien, en om toekomstige werkgevers een goed beeld te geven van wat ik kan.',
  tags: ['Figma', 'Photoshop', 'HTML', 'CSS'],
  heroImg: portfolioImg,
  extraImgs: [projectsImg, artImg],
  volgendProject: 3,
},
{
  id: 3,
  titel: 'Dashboard',
  subtitel: 'Werkplekleren 1',
  jaar: 'December2025',
  categorie: 'Werkplekleren',
  link: 'https://www.figma.com/design/wg3uJ0Pw1IL9ngGOXCoHpr/Dashboard---WPL-1?node-id=38-2&p=f&t=KF816RVIMrn00kTZ-0',
  beschrijving: 'Voor werkplekleren 1 heb ik een dashboard ontworpen dat als een soort cv fungeert. Het dashboard is bedoeld om mijn vaardigheden, projecten en ervaringen op een overzichtelijke manier te presenteren. Ik heb verschillende secties toegevoegd, zoals een overzicht van mijn projecten, mijn vaardigheden en mijn contactinformatie. Het doel van dit dashboard is om potentiële werkgevers een snel en duidelijk beeld te geven van wie ik ben als designer en wat ik te bieden heb.',
  tags: ['Figma', 'UI', 'UX', 'Design'],
  heroImg: Dashboard,
  extraImgs: [DashboardSchetsen, DashboardMoodboard],
  volgendProject: 4,
},
{
  id: 4,
  titel: 'Retime',
  subtitel: 'Werkplekleren 2',
  jaar: 'januari - mei 2026',
  categorie: 'Werkplekleren',
  link: 'https://retimepxl.netlify.app/contact',
  beschrijving: [
  'Vanaf 2027 wordt tijdregistratie een wettelijke standaard in België. Retime speelt hierop in door tijdsregistratie niet alleen verplicht te maken maar ook mensgericht en gebruiksvriendelijk te maken. Wij geloven dat tijd registreren niet als een controle hoeft gebruikt te worden maar een manier om duidelijkheid en vertrouwen te creëren binnen jouw bedrijf.',
  'Onze missie is om binnen vijf jaar de standaard te worden voor mensgerichte tijdsregistratie in België. Een systeem dat bedrijven wettelijk beschermt en tegelijk het vertrouwen versterkt tussen werknemer en werkgever.',
  'Retime wil Belgische KMOs hun werkuren vereenvoudigen, zonder administratieve stress, digitaal helpen te registreren. Dat doen we door complexe wetgeving te vertalen naar een gebruiksvriendelijke oplossing die zowel jong als oud kunnen gebruiken. Daarnaast zorgen we voor een snelle implementatie zonder IT-complexiteit, zodat bedrijven meteen wettelijk in orde zijn zonder extra kopzorgen.',
],
  tags: ['HTML', 'CSS', 'Figma', 'Design', 'UI', 'UX', 'Backend'],
  heroImg: Retime,
  extraImgs: [WhyRetime, ProductRetime],
  volgendProject: 5,
},
{
  id: 21,
  titel: 'Werkplekleren 1',
  subtitel: 'Portfolio V1',
  jaar: '2025',
  categorie: '',
  link: '',
  beschrijving: 'Beschrijving hier',
  tags: ['HTML', 'CSS'],
  heroImg: 'https://jouw-foto-url.jpg',
  extraImgs: [null, null],
  volgendProject: 22,
},
  // voeg meer projecten toe...
]