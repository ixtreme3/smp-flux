# Implementing the Flux Pattern in JavaScript

Simplified implementation of the Flux pattern and an example of using a pattern on an interface with many nested components to avoid a situation called "props drilling"

![img.png](img.png)

Props drilling is an anti-pattern where props are passed through intermediate components that don't use the received props themselves but only pass them to the next components.

In this case, the most nested component is the Counter, and its state is passed down through the Wrapper1, Wrapper2, and Wrapper3 components, which don't need the extra props.


# Реализация паттерна Flux на языке JS

Пример использования паттерна на интерфейсе с множеством вложенных компонентов для избежания ситуации под названием "props drilling"

**Props drilling** - анти-паттерн при котором передача пропсов происходит через промежуточные компоненты которые не используют получаемые пропсы, а только передают их в следующие компоненты.

В данном случае самым вложенным компонентом является Counter - его состояние передается вниз через компоненты Wrapper1, Wrapper2 и Wrapper3, которые не нуждаются в лишних пропсах.
