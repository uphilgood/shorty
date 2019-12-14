import React, {useEffect} from 'react';
import Link from './Link';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ALL_LINKS_QUERY = gql`
    query AllLinksQuery {
        allLinks {
            id
            url
            description
            hash
        }
    }   
`;

const LINKS_SUBSCRIPTION = gql`
subscription NewLinkCreatedSubscription {
    Link(filter: { mutation_in: [CREATED] }) {
        node {
            id
            url
            description
            hash
        }
    }
}
`;

const LinkList = props => {

    useEffect(() => {
        props.allLinksQuery.subscribeToMore({
            document: LINKS_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                const newLinks = [
                ...prev.allLinks,
                subscriptionData.data.Link.node,
                ];
                const result = {
                ...prev,
                allLinks: newLinks,
                };
                return result;
            },
        });
    }, [])
   
    if (props.allLinksQuery && props.allLinksQuery.loading) {
        return <div>Loading ...</div>;
    }

    if (props.allLinksQuery && props.allLinksQuery.error) {
        return <div>Error occurred</div>;
    }
    
    const allLinks = props.allLinksQuery.allLinks;

    if (allLinks.length === 0) {
        return <div>No links...</div>;
    }

    return (
        <div>
            {allLinks.map(link => (
                <Link key={link.id} link={link} />
            ))}
        </div>
    );
};
    

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(LinkList);