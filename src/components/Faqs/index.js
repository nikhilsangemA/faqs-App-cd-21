import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div>
      <h1>Faqs</h1>
      <ul>
        {faqsList.map(eachFaqs => (
          <FaqItem listOfDetails={eachFaqs} key={eachFaqs.id} />
        ))}
      </ul>
    </div>
  )
}

export default Faqs
