import React, { useState } from "react";
import lodash from "lodash";

const COMP_PREFIX = "multi-select-comp";

interface Option {
  label: string;
  value: string;
  selected?: boolean;
  default?: boolean;
}

interface MultiselectProps {
  options: Option[];
  label: string;
  handleOnchange: Function;
}

const getSelectedOptions = (options: Option[]): Option[] => {
  return options.filter(opt => opt.selected === true);
};

const getUnselectedOptions = (options: Option[]): Option[] => {
  return options.filter(opt => !opt.selected);
};

const updateOptionsUtil = (
  option: Option,
  isSelected: boolean,
  options: Option[]
): Option[] => {
  let copyOptions: Option[] = lodash.cloneDeep(options);
  copyOptions = copyOptions.map(opt => {
    if (option.value === opt.value) {
      opt.selected = isSelected;
    }
    return opt;
  });
  return copyOptions;
};

const clearOptions = (options: Option[]): Option[] => {
  let copyOptions = options.map(opt => {
    opt.selected = false;
    return opt;
  });
  return copyOptions;
};

const Multiselect: React.FunctionComponent<MultiselectProps> = (
  props: MultiselectProps
) => {
  const { options, label, handleOnchange } = props;

  const [openState, setOpenState] = useState(false);
  const [opts, updateOptions] = useState(options);

  const selectedOptions = getSelectedOptions(opts);
  const unselectedOptions = getUnselectedOptions(opts);

  return (
    <div className={COMP_PREFIX}>
      <div
        className={`${COMP_PREFIX}-container`}
        onClick={() => setOpenState(!openState)}
      >
        <div>
          <span className={`${COMP_PREFIX}-label`}>{label}</span>
          <span className={`${COMP_PREFIX}-selected`}>
            {`${selectedOptions.length} selected`}
          </span>
        </div>
        <div className={`${COMP_PREFIX}-arrow`} />
      </div>

      {openState && (
        <div className={`${COMP_PREFIX}-options-container`}>
          <div className={`${COMP_PREFIX}-label-container`}>
            <span className={`${COMP_PREFIX}-selected-label`}>Selected</span>
            <span
              className={`${COMP_PREFIX}-clear-label`}
              onClick={() => updateOptions(clearOptions(opts))}
            >
              Clear
            </span>
          </div>
          {getSelectedOptions(opts).map(opt => (
            <div
              className={`${COMP_PREFIX}-option ${COMP_PREFIX}-option--selected`}
              key={opt.value}
            >
              <input
                type="checkbox"
                className={`${COMP_PREFIX}-option-input`}
                checked={opt.selected}
                onChange={e => {
                  updateOptions(updateOptionsUtil(opt, e.target.checked, opts));
                  handleOnchange(selectedOptions, unselectedOptions);
                }}
              />
              {opt.label}
            </div>
          ))}

          <div className={`${COMP_PREFIX}-options-separator`} />

          {getUnselectedOptions(opts).map(opt => (
            <div
              className={`${COMP_PREFIX}-option ${COMP_PREFIX}-option--unselected`}
              key={opt.value}
            >
              <input
                type="checkbox"
                className={`${COMP_PREFIX}-option-input`}
                checked={opt.selected}
                onChange={e => {
                  updateOptions(updateOptionsUtil(opt, e.target.checked, opts));
                  handleOnchange(selectedOptions, unselectedOptions);
                }}
              />
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Multiselect;
