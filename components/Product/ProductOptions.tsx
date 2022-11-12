export default function ProductOptions({ name, values, selectedOptions, setOptions }) {
    return (
      <fieldset className="mt-3 dark:text-white">
        <legend className="text-xl font-semibold">{name}</legend>
        <div className="inline-flex items-center flex-wrap">
          {
            values.map(value => {
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
                      setOptions(name, value)
                    }}
                  />
                  <div className={`p-2 mt-3 text-lg rounded-full block cursor-pointer mr-3 ${checked ?
                  "text-white dark:text-black bg-gray-500 dark:bg-gray-100" : "text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-slate-800"}`}>
                    <span className="px-2">{value}</span>
                  </div>
                </label>
              )
            })
          }
        </div>
      </fieldset>
    )
  }
  