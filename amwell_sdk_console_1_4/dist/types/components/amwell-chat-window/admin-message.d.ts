/*!
 * American Well Visit Console Widget
 *
 * Copyright © 2019 American Well.
 * All rights reserved.
 *
 * It is illegal to use, reproduce or distribute
 * any part of this Intellectual Property without
 * prior written authorization from American Well.
 */
import { FunctionalComponent } from '../../stencil-public-runtime';
import { awsdk } from '../../awsdk';
interface AdminMessageProps {
    chatItem: awsdk.AWSDKChatItem;
    i18messages: {
        [key: string]: string;
    };
}
declare const AdminMessage: FunctionalComponent<AdminMessageProps>;
export default AdminMessage;
