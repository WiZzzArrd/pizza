import ContentLoader from "react-content-loader";

const MyLoader: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={506}
    viewBox='0 0 280 506'
    backgroundColor='#e3e3e3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='142' cy='125' r='112' />
    <rect x='0' y='248' rx='15' ry='15' width='280' height='60' />
    <rect x='-2' y='331' rx='15' ry='15' width='280' height='92' />
    <rect x='3' y='452' rx='10' ry='10' width='98' height='46' />
    <rect x='177' y='452' rx='10' ry='10' width='98' height='46' />
  </ContentLoader>
);

export default MyLoader;
