Challenge #1: HINT
-------------------------------------------------------------

        function onNameChange(ev) {
          let value = ev.target.value;
          setName(value);
          console.log('getting a new value!', value);
        }
        /* ... etc .. */


Challenge #2: HINT
-------------------------------------------------------------

        const [dob, setDOB] = useState('2975');
        //  in the code...

        function onDobChange(ev) {
          let value = ev.target.value;
          console.log('dob value!', value);
          setDOB(value);
        }

        //  in the JSX:

        <h2>Date of birth: {dob}</h2>
        <input
            placeholder="Date of birth"
            value={dob}
            onChange={onDobChange}
          />


Challenge #5: HINT
-------------------------------------------------------------

- For the "fun times" checkbox:

    function onFunTimesChanged() {
      let newValue = !interests.funTimes;
      setInterests({
        ...interests,
        funTimes: newValue,
      });
    }

- The `!` is the boolean "not" operator, and inverts the value. In other words,
  it's equivalent to:

      if (interests.funTimes === true) {
        newValue = false;
      } else {
        newValue = true;
      }

- Hint: You'll have to make one function per checkbox for this one.  Don't
  worry much about being super DRY at first.


- Want to dig deeper? For more information: Google "spread syntax", which
  allows an iterable like arrays, strings, or even objects to be expanded into
  another object, which is commonly used for cloning and merging data.  We have
  to use spread syntax when updating because updating a state variable in a
  function always replaces it instead of merging it.


Challenge #6: HINT
-------------------------------------------------------------


        <h2>Salary calculator</h2>
        <label>
          <input
              onChange={STUFF GOES HERE}
              value={STUFF GOES HERE}
          /> x 12 + <input
              onChange={STUFF GOES HERE}
              value={STUFF GOES HERE}
          /> (bonus) = {salaryMonthly * 12 + salaryBonus} slurm bucks per year
        </label>


- Input sanitization hints:
    - Looking to better sanitize input? You can sanitize input by converting to
      a number during the onChange.
    - For a better UX, you can also only do the setState if the value is valid
      or changes.
    - Code clue:

        const valueString = ev.target.value;
        const valueNumber = Number(valueNumber); // convert to number
        if (Number.isNumber(valueNumber) && valueNumber !== salary) { // only if valid & different
            setSalary(valueNumber);
        }



Challenge #7: HINT
-------------------------------------------------------------

Here's a solution for one input:

        <input onChange={(ev) => setRobo1(ev.target.value)} value={robo1} />

Here's how to conditional set style based on a variable:

        <div style={{background: answer === "42" ? "green" : "red"}}></div>




Bonus Challenge #1: HINT
-------------------------------------------------------------


- Hint Step 1:

          <input
              type="checkbox"
              checked={interests.funTimes}
              onChange={onCheckboxChange}
              name="funTimes"
            />


- Hint Step 2:

        function onCheckboxChange(ev) {
          console.log('checkbox changing!');
        }

- Hint Step 3:


        const name = ev.target.name;
        const newValue = !interests[name];


- Hint Step 4:

        setInterests({
          ...interests,
          [name]: newValue,
        });


