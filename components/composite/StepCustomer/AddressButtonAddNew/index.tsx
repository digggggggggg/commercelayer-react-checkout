import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  onClick: () => void
}

export const AddressButtonAddNew: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Wrapper>
      <Button type="button" onClick={onClick} data-cy="add-new-billing-address">
        {children}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.h4`
  ${tw`flex p-2 my-2`}
`

const Button = styled.button`
  ${tw`inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-transparent rounded-md focus:outline-none focus:ring-2 hover:ring-2 ring-offset-2 ring-blue-500`}
`
