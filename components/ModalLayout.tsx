import {Modal as RNModal, ModalProps, KeyboardAvoidingView, View, Platform} from "react-native";

type Props = ModalProps & {
    isOpen: boolean
    withInput?: boolean
}

const ModalLayout = ({isOpen, withInput, children, ...rest}: Props) => {
    const content = withInput ? (
            <KeyboardAvoidingView
                className="flex-1 items-center justify-center px-3 bg-zinc-900/40"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {children}
            </KeyboardAvoidingView>
        )
        :
        (
            <View className="flex-1 items-center justify-center px-3 bg-zinc-900/40">
                {children}
            </View>
        )

    return (
        <RNModal
            visible={isOpen}
            transparent
            animationType="fade"
            {...rest}
        >
            {content}
        </RNModal>
    )
}
export default ModalLayout;