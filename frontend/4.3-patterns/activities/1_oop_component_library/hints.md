# General Hints

Your most useful clues will be looking at the source code to each of these
components, and trying to deduce what is required to use them. This can be done
by looking for "this.props" within each of these components: This will give you
clues as to what you will need to specify in order for the component to work.
For example, if you see "this.props.shouldShowMe", then you know you need to do
"shouldShowMe={true}" (or something similar) when using that component in App.


Challenge #1: HINT
---------------------------------------------------------------

Hint #1: There already is some starter code for using Button, which means you
will only need to write a couple props to complete this activity.

Hint #2: This will require inspecting the code of the Button component to figure
out what props it expects, as might not be named what you might expect.



Challenge #2: HINT
---------------------------------------------------------------

Hint #1: Copy and modify the code you used for Challenge #1.

Hint #2: It's okay to not be DRY.



Challenge #3: HINT
---------------------------------------------------------------

1. As a first step, create an modal that cannot be dismissed

2. Next, move the "Modal ipsum paragraph into it, and figure out how to make
the title of the modal say  "Modal example"

3. Then, add methods and state necessary to dismiss the modal -- this will
require new state and a method to modify it

4. Finally, add a button to show the modal, and make the modal not visible by
default but only when the button is clicked


- Hint #1: Modal that can't be dismissed


          <h1>Modal example</h1>
          <Modal
                visible={true}
                title="Modal example">
            <p>Testing testing 123</p>
          </Modal>


- Hint #2: Modal with visibility based on state (requires modalShowing state to
  be defined)


          <Modal
            visible={this.state.modalShowing}
            title="Modal example">
          </Modal>



- Hint #3: Button to show modal (requires showModal be defined)

          <Button
              gotClicked={this.showModal}
              buttonText="Show modal"
            />


- Hint #4: Adding ability to dismiss

          <Modal
            visible={this.state.modalShowing}
            title="Modal example"
            onDismiss={this.hideModal}>
          </Modal>

