export default function ProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
}) {
  return (
    <fieldset className="mt-3 dark:text-white">
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex flex-wrap items-center">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;

          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div
                className={`mt-3 mr-3 block cursor-pointer rounded-full p-2 text-lg ${
                  checked
                    ? 'bg-gray-500 text-white dark:bg-gray-100 dark:text-black'
                    : 'bg-gray-200 text-gray-900 dark:bg-slate-800 dark:text-gray-100'
                }`}
              >
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
