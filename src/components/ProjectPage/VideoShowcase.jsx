function VideoShowcase({ url, width, height }) {
    return (
        <iframe
            width={width}
            height={height}
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className=""
        ></iframe>
    );
}
export default VideoShowcase;