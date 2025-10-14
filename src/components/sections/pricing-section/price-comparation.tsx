interface PriceComparationProps {
    officialPriceTitle?: string;
    officialPriceText: string;
    launchPriceTitle?: string;
    launchPriceText?: string;
}

const PriceComparation: React.FC<PriceComparationProps> = ({ officialPriceText, launchPriceText, launchPriceTitle, officialPriceTitle }) => {
    return (
        <div className="w-full lg:w-[80%] flex flex-col lg:grid lg:grid-cols-2 mt-16 text-center text-black">
            <span className="text-md lg:text-2xl font-bold px-6 bg-[#B9A3E6] rounded-t-xl lg:rounded-t-none lg:rounded-l-xl py-4 flex flex-col justify-center">
                <p>
                    {officialPriceTitle ? officialPriceTitle : 'Precio Oficial:'}
                </p>
                <p className="line-through text-red-500 max-w-[75%] mx-auto">
                    {officialPriceText}
                </p>
            </span>
            <span className="text-md lg:text-2xl font-bold px-6 bg-[#EBE5D5] rounded-b-xl lg:rounded-l-none lg:rounded-r-xl py-4 flex flex-col justify-center">
                <p>
                    {launchPriceTitle ? launchPriceTitle : 'Precio de Lanzamiento:'}
                </p>
                <p className="text-green-600 max-w-[75%] mx-auto">{launchPriceText ? launchPriceText : officialPriceText}</p>
            </span>
        </div>
    );
};

export default PriceComparation;