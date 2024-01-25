import CardComponent from '../../shared/components/card/CardComponent';
function MainPage() {
  return (
    <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5">
      <CardComponent img={singlePlayImg} title={'혼자이신가요?'} playMode={'싱글플레이'} link={'/selecttaste'} />
      <CardComponent img={duoPlayImg} title={'친구와 함께이신가요?'} playMode={'듀오플레이'} link={'/selecttaste'} />
      <CardComponent
        img={livePlayImg}
        title={'실시간으로 친구와 분석받고 싶다면? '}
        playMode={'실시간 플레이'}
        link={'/livemode'}
      />
    </section>
  );
}

const singlePlayImg = './SinglePlayCardImg.png';
const duoPlayImg = './DuoPlayCardImg.png';
const livePlayImg = './LivePlayCardImg.png';

export default MainPage;
