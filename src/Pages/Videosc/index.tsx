import './style.scss';
import { Header } from '../../components/Header/Index';

export const Videosc = () => {
  return (
    <div>
      <Header />
      <div className="backgroud-videos">
        <div className="recommendations-videos">
          <div className="p-center">
            <p>Recommendations</p>
          </div>
          <div className="videos-area-content-reccomend">
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UNs-0eGbzyY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Thgcdciy3hU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0rz5uEh76kk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="greenfyProduction-videos">
          <p className="p-center">GreenFy Production</p>
          <div className="videos-area-content-greenfy">
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Thgcdciy3hU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Thgcdciy3hU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Thgcdciy3hU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
