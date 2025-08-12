type ImageP = {
    src: string
};

const ImageComp = ({ src } : ImageP)  => {
    return <img className="w-[25%] lg:w-[20%] mx-auto my-3" src={src}/>

}

export default ImageComp;