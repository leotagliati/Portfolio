function UnordList({ itemsString }) {
    // Use o método `split` nativo para dividir a string.
    const itemsList = itemsString.split('*');

    // Mapeie os itens para renderizar a lista.
    const itemsMap = itemsList.map((x, index) => (
        <li key={index} className="text-clay-navy mt-3">
            {x.trim()} {/* Remove espaços em branco extras. */}
        </li>
    ));

    return <ul className="list-disc pt-3 pl-6 text-2xl">{itemsMap}</ul>;
}

export default UnordList;
