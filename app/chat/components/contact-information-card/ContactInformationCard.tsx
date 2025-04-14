import { useLoaderData, useNavigation, useParams } from 'react-router'
import { ContactInformation } from './ContactInformation'
import { NoContactSelected } from './NoContactSelected'
import { ContactInformationSkeleton } from './ContactInformationSkeleton'
import type { Client } from '~/chat/interfaces/chat.interface'

interface Props {
    client?: Client
}

export const ContactInformationCard = ({ client }: Props) => {
    const { id } = useParams()
    const { clients = [] } = useLoaderData()
    const { state } = useNavigation()

    const isPending = state === 'loading'

    if (client) return <ContactInformation client={client}></ContactInformation>

    if (isPending) return <ContactInformationSkeleton />

    if(!id) return <NoContactSelected />

    if(!client) return <NoContactSelected />

    return <ContactInformation client={client} />
}
