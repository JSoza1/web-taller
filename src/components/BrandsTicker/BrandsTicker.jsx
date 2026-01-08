import './BrandsTicker.css';

const BrandsTicker = () => {
    // Lista de "Marcas" o conceptos para dar estilo (sin logos reales por copyright, texto estilizado)
    // Lista de marcas únicas
    const uniqueBrands = [
        "RENAULT", "PEUGEOT", "AUDI", "VOLVO", "KIA", "FORD", "VOLKSWAGEN",
        "FIAT", "CHERY", "ALFA ROMEO", "CHEVROLET", "CITROEN", "HONDA", "SUZUKI",
        "SEAT", "BMW", "NISSAN"
    ];

    // Duplicamos x4 para pantalla ultra-wide y scroll infinito suave
    const brands = [...uniqueBrands, ...uniqueBrands, ...uniqueBrands, ...uniqueBrands];

    return (
        <div className="brands-ticker">
            <div className="brands-ticker__track">
                {brands.map((brand, index) => (
                    <span key={index} className="brands-ticker__item">
                        {brand} <span className="brands-ticker__separator">//</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BrandsTicker;
