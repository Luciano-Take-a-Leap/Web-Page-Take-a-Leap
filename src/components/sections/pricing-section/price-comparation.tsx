interface PriceComparationProps {
    officialPriceTitle?: string;
    officialPriceText: string;
    launchPriceTitle?: string;
    launchPriceText?: string;
}

const PriceComparation: React.FC<PriceComparationProps> = ({ officialPriceText, launchPriceText, launchPriceTitle, officialPriceTitle }) => {
    return (
        <div className="w-full flex flex-col md:grid md:grid-cols-2 mt-16 text-center text-black">
            <span className="text-md md:text-2xl font-bold px-6 bg-orange-300 rounded-t-xl md:rounded-t-none md:rounded-l-xl py-8 flex flex-col">
                <p>
                    {officialPriceTitle ? officialPriceTitle : 'Precio Oficial:'}
                </p>
                <p className="line-through text-red-500 max-w-[50%] mx-auto">
                    {officialPriceText}
                </p>
            </span>
            <span className="text-md md:text-2xl font-bold px-6 bg-yellow-200 rounded-b-xl md:rounded-l-none md:rounded-r-xl py-8 flex flex-col">
                <p>
                    {launchPriceTitle ? launchPriceTitle : 'Precio de Lanzamiento:'}
                </p>
                <p className="text-green-600 max-w-[50%] mx-auto">{launchPriceText ? launchPriceText : officialPriceText}</p>
            </span>
        </div>
    );
};

export default PriceComparation;