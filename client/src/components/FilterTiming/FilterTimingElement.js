import './FilterTiming.css';

function FilterTimingElement({ text, callback, isActive }) {
  return (
    <div className={`filter-timing__element ${isActive ? 'filter-timing__element_active' : ''}`} onClick={callback}>
      {text}
    </div>
  );
}

export default FilterTimingElement;
