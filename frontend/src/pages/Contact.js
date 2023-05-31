import Header from '../components/general/Header'
import Navigation from '../components/general/Navigation'
import '../style/contacts.css'
import Form from '../components/contact/Form'

export const Contact = () => {
  return (
    <div className="wholecontact" >
      <Header></Header>
        <div class="maincontact">
            <div class="leftcontact">
                <Navigation></Navigation>
            </div>

            <div class="rightcontact">
                <Form></Form>
            </div>
        </div>
    </div>
  )
}
