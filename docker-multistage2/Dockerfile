FROM gcc:latest AS builder

WORKDIR /app

COPY hello.c .

RUN gcc hello.c -o hello

FROM debian:bookworm-slim

WORKDIR /app

COPY --from=builder /app/hello .

CMD ["./hello"]