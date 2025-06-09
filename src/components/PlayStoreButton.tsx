type PlayStoreButtonProps = {
    type?: 'default' | 'white';
};

const PlayStoreButton = ({ type = 'default' }: PlayStoreButtonProps) => {
    const isWhite = type === 'white';

    return (
        <a href="#">
            <img
                className="blue_img"
                src={isWhite ? 'images/googleplay_white.png' : 'images/googleplay_blue.png'}
                alt="Google Play"
            />
            <img
                className="white_img"
                src="images/googleplay_white.png"
                alt="Google Play"
            />
        </a>
    );
};

export default PlayStoreButton;
