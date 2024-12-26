const getGradient = (LV: number) => {
  switch (LV) {
    case 1:
      return 'linear-gradient(180deg, #5B3D36 0%, #FFD0C6 38.5%, #735454 100%)';
    case 2:
      return 'linear-gradient(180deg, #CE8E4C 15.67%, #FFE5AA 62.47%, #79582F 99.99%)';
    case 3:
      return 'linear-gradient(180deg, #4457A1 0%, #BCEEFF 70%, #244270 100%)';
    case 4:
      return 'linear-gradient(180deg, #9F52C7 0%, #EC8AFA 52%, #44277E 100%)';
    case 5:
      return 'linear-gradient(180deg, #1E91A9 0%, #D0DDFF 40%, #092A64 100%)';
    case 6:
      return 'linear-gradient(180deg, #C00 0%, #FFE500 20%, #0FF 40%, #00C 80%, #5F0 100%)';
    default:
      return 'linear-gradient(180deg, #CE8E4C 15.67%, #FFE5AA 62.47%, #79582F 99.99%)';
  }
};

export default getGradient;
