import "./index.css";

const Logo = () => {
  return (
    <div className="logoIMG">
      <svg viewBox="0 0 960 150">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="80%">
            VINDHU
          </text>
        </symbol>

        <g class="g-ants">
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
        </g>
      </svg>
    </div>
  );
};
export default Logo;
