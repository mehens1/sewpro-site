type AppStoreButtonProps = {
    type?: 'default' | 'white';
};

const AppStoreButton = ({ type = 'default' }: AppStoreButtonProps) => {
    const isWhite = type === 'white';

    return (
        <a href="#">
            <img
                className="blue_img"
                src={isWhite ? 'images/appstore_white.png' : 'images/appstore_blue.png'}
                alt="App Store"
            />
            <img
                className="white_img"
                src="images/appstore_white.png"
                alt="App Store"
            />
        </a>
    );
};

export default AppStoreButton;
